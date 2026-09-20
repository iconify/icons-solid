import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u2ukdzbzh.css';
import '../../css/y/yommb2bng.css';
import '../../css/t/tad07ubdq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="u2ukdzbzh"/><path class="yommb2bng"/><path class="tad07ubdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:virus-antivirus"} {...others} />);
}

export default Component;
