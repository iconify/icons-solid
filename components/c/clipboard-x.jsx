import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/ieby17vrm.css';
import '../../css/e/e61vzcrmw.css';
import '../../css/f/ffvfrhkat.css';
import '../../css/r/r3hgbspfz.css';
import '../../css/y/yky17ne2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ieby17vrm wm-shadow"/><path class="e61vzcrmw wm-shadow"/><path class="ffvfrhkat"/><path class="r3hgbspfz"/><path class="yky17ne2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:clipboard-x"} {...others} />);
}

export default Component;
