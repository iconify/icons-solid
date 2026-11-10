import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f1z6j1pwl.css';
import '../../css/a/aqvlbhbyy.css';
import '../../css/k/kiw2ik2ii.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f1z6j1pwl"/><path class="aqvlbhbyy"/><path class="kiw2ik2ii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:olympic-torch"} {...others} />);
}

export default Component;
