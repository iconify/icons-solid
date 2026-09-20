import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/l-hunubkq.css';
import '../../css/i/iha_2f5_x.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="l-hunubkq"/><path class="iha_2f5_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:stopwatch"} {...others} />);
}

export default Component;
