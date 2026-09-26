import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/k/k1ojr1b0y.css';
import '../../css/k/k98lz0wxp.css';
import '../../css/g/gsjsgmb5u.css';
import '../../css/r/rm-429a7u.css';
import '../../css/x/xwregebkj.css';
import '../../css/f/f6p-ckayo.css';
import '../../css/e/eun__-bwu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="k1ojr1b0y"/><path class="k98lz0wxp"/></g><path class="gsjsgmb5u"/><path class="rm-429a7u"/><path class="xwregebkj"/><path class="f6p-ckayo"/><path class="eun__-bwu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cup-first-bold-duotone"} {...others} />);
}

export default Component;
