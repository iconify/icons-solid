import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nolfx4b0d.css';
import '../../css/y/ys3yk5bwx.css';
import '../../css/l/llaf8kysj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nolfx4b0d"/><path class="ys3yk5bwx"/><path class="llaf8kysj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:brain-broken"} {...others} />);
}

export default Component;
