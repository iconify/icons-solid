import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qsyui3apw.css';
import '../../css/a/angho8bkl.css';
import '../../css/r/rbdb7-vno.css';
import '../../css/y/yecpylz9u.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qsyui3apw"/><path clip-rule="evenodd" class="angho8bkl"/><path class="rbdb7-vno"/><path class="yecpylz9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:gift"} {...others} />);
}

export default Component;
