import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ai0cm1bnr.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/s/stko6j3hi.css';
import '../../css/u/u6rhfld5x.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ai0cm1bnr"/><g class="x8poo_bjf"><path class="stko6j3hi"/><path class="u6rhfld5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:revolving-hearts"} {...others} />);
}

export default Component;
