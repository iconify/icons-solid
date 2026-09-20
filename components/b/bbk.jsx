import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8qb3xnju.css';
import '../../css/k/kx9psbb3g.css';
import '../../css/n/njgsh4b_u.css';
import '../../css/p/p-hbfmk9o.css';
import '../../css/q/qsifstb_t.css';
import '../../css/a/a8bh_wbxd.css';
import '../../css/w/w_ad-h4hd.css';
import '../../css/v/vx3i-hbuk.css';

const viewBox = {"width":1543,"height":1426};
const content = `<path class="k8qb3xnju"/><path class="kx9psbb3g"/><path class="njgsh4b_u"/><path class="p-hbfmk9o"/><path class="qsifstb_t"/><path class="a8bh_wbxd"/><path class="w_ad-h4hd"/><path class="vx3i-hbuk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:bbk"} {...others} />);
}

export default Component;
