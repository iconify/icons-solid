import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zrpmm7bkk.css';
import '../../css/q/qqtepqb8i.css';
import '../../css/l/luu53hbat.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zrpmm7bkk"/><path class="qqtepqb8i"/><path class="luu53hbat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:exit-broken"} {...others} />);
}

export default Component;
