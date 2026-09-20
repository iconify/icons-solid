import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/a7p_n66dl.css';
import '../../css/t/t82f5-99m.css';
import '../../css/y/yc1yqsu3y.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="a7p_n66dl"/><path class="t82f5-99m"/><path class="yc1yqsu3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:horizontal-toggle-button"} {...others} />);
}

export default Component;
