import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wgxn76bkp.css';
import '../../css/g/gf2qt1pqt.css';
import '../../css/a/a71-bmb9e.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="wgxn76bkp"><circle class="gf2qt1pqt"/><path class="a71-bmb9e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:react"} {...others} />);
}

export default Component;
