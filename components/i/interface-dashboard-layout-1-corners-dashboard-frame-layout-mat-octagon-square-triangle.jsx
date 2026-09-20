import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yph-txb3i.css';
import '../../css/d/dva1695_e.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect transform="rotate(180 7 7)" class="yph-txb3i"/><path class="dva1695_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-dashboard-layout-1-corners-dashboard-frame-layout-mat-octagon-square-triangle"} {...others} />);
}

export default Component;
