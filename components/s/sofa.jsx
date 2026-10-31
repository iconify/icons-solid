import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qji_nw_po.css';
import '../../css/u/uzwsdwdgp.css';
import '../../css/e/euyf6tzlq.css';
import '../../css/t/tdl6o1bjk.css';
import '../../css/z/zniy-ub1w.css';
import '../../css/n/n2u1-9i2f.css';
import '../../css/k/ks-q-eeht.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="qji_nw_po"/><path class="uzwsdwdgp"/><path class="euyf6tzlq wm-shine"/><path class="tdl6o1bjk"/><path class="zniy-ub1w"/><path class="n2u1-9i2f"/><path class="ks-q-eeht wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:sofa"} {...others} />);
}

export default Component;
