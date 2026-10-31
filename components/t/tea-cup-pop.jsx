import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzv02bb8d.css';
import '../../css/s/srspgacul.css';
import '../../css/v/vq1b7sbju.css';
import '../../css/k/kmy366b7a.css';
import '../../css/s/s228eisek.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yzv02bb8d"/><path class="srspgacul"/><path clip-rule="evenodd" class="vq1b7sbju"/><path clip-rule="evenodd" class="kmy366b7a"/><path class="s228eisek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:tea-cup-pop"} {...others} />);
}

export default Component;
