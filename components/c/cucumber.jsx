import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lucauldwf.css';
import '../../css/y/y9kjc6bfx.css';
import '../../css/a/a2ai9tcjf.css';
import '../../css/l/lgrei8-mr.css';
import '../../css/e/ews49cctm.css';
import '../../css/l/l-fs14mhk.css';

const viewBox = {"width":1024,"height":1024};
const content = `<g display="block"><path class="lucauldwf"/><path class="y9kjc6bfx"/><path class="a2ai9tcjf"/><path class="lgrei8-mr"/><path class="ews49cctm"/><path class="l-fs14mhk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:cucumber"} {...others} />);
}

export default Component;
