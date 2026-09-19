import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/ds-cv6but.css';
import '../../css/y/y6--uvbxg.css';

const viewBox = {"width":301,"height":181};
const content = `<g class="ft5dv1b6b"><path class="ds-cv6but"/><path class="y6--uvbxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:bh"} {...others} />);
}

export default Component;
