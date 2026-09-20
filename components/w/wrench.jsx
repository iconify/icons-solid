import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sarsgtq6u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sarsgtq6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:wrench"} {...others} />);
}

export default Component;
