import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iqyk-ibir.css';
import '../../css/e/e41bt1g7m.css';
import '../../css/o/ox77wxbsm.css';
import '../../css/q/qx1mr74bj.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="iqyk-ibir"/><path class="e41bt1g7m"/><path class="ox77wxbsm"/><path class="qx1mr74bj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:graduation-cap"} {...others} />);
}

export default Component;
