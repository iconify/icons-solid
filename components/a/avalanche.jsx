import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vr-rnw5oe.css';
import '../../css/e/esu5d1izo.css';
import '../../css/q/qzc_4zpef.css';
import '../../css/z/z04drlb1l.css';
import '../../css/w/w_5xkzbfr.css';
import '../../css/q/qgmt2ac5n.css';
import '../../css/e/et_nkmb4n.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="vr-rnw5oe"/><path class="esu5d1izo"/><path class="qzc_4zpef"/><g class="z04drlb1l"><path class="w_5xkzbfr"/><path class="qgmt2ac5n"/><path class="et_nkmb4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:avalanche"} {...others} />);
}

export default Component;
