import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t-np9ubwg.css';
import '../../css/u/uk8atmnum.css';
import '../../css/g/geqsg-a7g.css';

const viewBox = {"width":301,"height":185};
const content = `<g class="ft5dv1b6b"><path class="t-np9ubwg"/><path class="uk8atmnum"/><path class="geqsg-a7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:fi"} {...others} />);
}

export default Component;
