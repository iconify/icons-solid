import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yph-txb3i.css';
import '../../css/t/tqo7kob6r.css';
import '../../css/n/ny7rq-b3f.css';
import '../../css/z/zb_lynbpp.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect transform="rotate(180 7.005 7)" class="yph-txb3i"/><circle class="tqo7kob6r"/><path class="ny7rq-b3f"/><path class="zb_lynbpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:image-picture-landscape-1-photos-photo-landscape-picture-photography-camera-pictures"} {...others} />);
}

export default Component;
