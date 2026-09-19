import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cyv5m-bea.css';
import '../../css/k/k5bmkj20q.css';
import '../../css/p/pm0euoe7o.css';
import '../../css/y/y9dsjdbhv.css';
import '../../css/t/tqctoxbww.css';
import '../../css/a/akgoqbb5x.css';
import '../../css/s/siv5tegrh.css';
import '../../css/i/iub_j8dvw.css';
import '../../css/y/yq8y9wmzq.css';
import '../../css/y/ybx6irboq.css';
import '../../css/t/tlyvr6bfi.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cyv5m-bea"/><path clip-rule="evenodd" class="k5bmkj20q"/><path clip-rule="evenodd" class="pm0euoe7o"/><path clip-rule="evenodd" class="y9dsjdbhv"/><path clip-rule="evenodd" class="tqctoxbww"/><path clip-rule="evenodd" class="akgoqbb5x"/><path class="siv5tegrh"/><path clip-rule="evenodd" class="iub_j8dvw"/><rect class="yq8y9wmzq"/><path class="ybx6irboq"/><path clip-rule="evenodd" class="tlyvr6bfi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:mx"} {...others} />);
}

export default Component;
