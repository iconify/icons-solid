import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/od1iqpboh.css';
import '../../css/k/k79q3xboj.css';
import '../../css/r/r5d2n_xgw.css';
import '../../css/w/w23d_qkzq.css';
import '../../css/z/zxhjaubkm.css';
import '../../css/g/gx7dd0bvf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="od1iqpboh"/><circle class="k79q3xboj"/><circle class="r5d2n_xgw"/><circle class="w23d_qkzq"/><circle class="zxhjaubkm"/><circle class="gx7dd0bvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:die"} {...others} />);
}

export default Component;
