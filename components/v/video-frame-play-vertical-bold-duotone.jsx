import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/leiavflem.css';
import '../../css/z/z-j2qvsgx.css';
import '../../css/h/h78_ecbaq.css';
import '../../css/b/b4c6m_bwn.css';
import '../../css/q/qqendgior.css';
import '../../css/c/ch9hcky0g.css';
import '../../css/g/guuqhebxh.css';
import '../../css/a/aluxx0bky.css';
import '../../css/l/l3l-oobgc.css';
import '../../css/k/k28w6hhem.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="leiavflem"/><path class="z-j2qvsgx"/><path class="h78_ecbaq"/><path class="b4c6m_bwn"/><path class="qqendgior"/><path class="ch9hcky0g"/><path class="guuqhebxh"/><path class="aluxx0bky"/><path class="l3l-oobgc"/><path class="k28w6hhem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-play-vertical-bold-duotone"} {...others} />);
}

export default Component;
