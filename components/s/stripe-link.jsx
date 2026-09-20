import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rj5k10lic.css';
import '../../css/v/v6586zbsh.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><circle class="rj5k10lic"/><path class="v6586zbsh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:stripe-link"} {...others} />);
}

export default Component;
