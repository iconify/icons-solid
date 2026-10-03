import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9j6e4_4g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h9j6e4_4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:text-align-justify-center"} {...others} />);
}

export default Component;
