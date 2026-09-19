import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uaw8cbbjh.css';
import '../../css/e/e0xgto1ad.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="uaw8cbbjh"/><path class="e0xgto1ad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:control-pad"} {...others} />);
}

export default Component;
