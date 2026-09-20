import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/spvo8vbit.css';
import '../../css/e/e140ko56p.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="spvo8vbit"/><path class="e140ko56p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:keyboard-option-setting-gear"} {...others} />);
}

export default Component;
