import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zl063ub9s.css';
import '../../css/s/setcevd4e.css';
import '../../css/x/xpvzfm1yu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zl063ub9s"/><path class="setcevd4e"/><path class="xpvzfm1yu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:crop-broken"} {...others} />);
}

export default Component;
