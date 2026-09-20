import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgwvj6b2r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cgwvj6b2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:left-to-right-text-direction"} {...others} />);
}

export default Component;
