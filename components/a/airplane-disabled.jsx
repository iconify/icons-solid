import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f2z6adcem.css';
import '../../css/a/aho2k-bdo.css';
import '../../css/m/mzaany7vl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="f2z6adcem"/><path class="aho2k-bdo"/><path class="mzaany7vl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:airplane-disabled"} {...others} />);
}

export default Component;
