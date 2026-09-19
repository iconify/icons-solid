import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/e/e8egfvxpw.css';
import '../../css/m/m-rtzozyv.css';
import '../../css/r/rxailpbig.css';
import '../../css/k/khtt6hbix.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="e8egfvxpw"/><path class="m-rtzozyv"/><path class="rxailpbig"/><circle transform="rotate(-180 37.176 10)" class="khtt6hbix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:s-turn-right"} {...others} />);
}

export default Component;
