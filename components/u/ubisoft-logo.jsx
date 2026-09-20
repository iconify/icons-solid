import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/m-nuw3bni.css';
import '../../css/p/pirkdkbpw.css';
import '../../css/c/cg3sp7bpj.css';
import '../../css/u/u4w82dlzp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="m-nuw3bni"/><path class="pirkdkbpw"/><path class="cg3sp7bpj"/><path class="u4w82dlzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:ubisoft-logo"} {...others} />);
}

export default Component;
