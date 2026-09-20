import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vzq47ekbe.css';
import '../../css/k/k-dfc3byz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="vzq47ekbe"/><path class="k-dfc3byz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:new-sticky-note"} {...others} />);
}

export default Component;
