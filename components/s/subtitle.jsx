import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sndazvbnj.css';
import '../../css/h/hu6j50bjd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sndazvbnj"/><path class="hu6j50bjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:subtitle"} {...others} />);
}

export default Component;
