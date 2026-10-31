import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/e/etqf5iv0q.css';
import '../../css/o/o2n61livj.css';
import '../../css/h/hq4mt9hro.css';
import '../../css/z/za3dt0bho.css';
import '../../css/u/uayejnbpx.css';
import '../../css/w/w4--igb5m.css';
import '../../css/q/qzeq8617x.css';
import '../../css/c/ce3uiubqm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="etqf5iv0q"/><path class="o2n61livj"/><path class="hq4mt9hro wm-shine"/><path class="wm-k za3dt0bho"/><path class="uayejnbpx wm-a"/><path class="w4--igb5m"/><path class="qzeq8617x"/><path class="ce3uiubqm wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:video-camera"} {...others} />);
}

export default Component;
