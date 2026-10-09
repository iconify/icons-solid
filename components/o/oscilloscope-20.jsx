import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fnl2ysb4i.css';
import '../../css/x/xe8w9nb7g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fnl2ysb4i"/><path class="xe8w9nb7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:oscilloscope-20"} {...others} />);
}

export default Component;
