import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/ary2b4lnc.css';
import '../../css/k/k_isoy1xt.css';
import '../../css/y/ytr9bcb0t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ary2b4lnc"/><path class="k_isoy1xt"/><path class="ytr9bcb0t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cable-car"} {...others} />);
}

export default Component;
