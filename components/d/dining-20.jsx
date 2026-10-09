import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itz70zb2a.css';
import '../../css/r/ry8p8oeqb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="itz70zb2a"/><path class="ry8p8oeqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dining-20"} {...others} />);
}

export default Component;
