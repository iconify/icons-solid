import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0c43x.css';
import '../../css/y/ydovum.css';
import '../../css/n/njj14b.css';
import '../../css/z/zq9xpz.css';
import '../../css/s/so-from-34.css';
import '../../css/f/fill-to-1.css';
import '../../css/d/d-k6ve5o.css';
import '../../css/d/d-c-ymvb.css';
import '../../css/d/d-ap4uuv.css';
import '../../css/d/d-yv2e7k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t0c43x ydovum"/><path class="njj14b ydovum"/><path class="ydovum zq9xpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:volume-high-filled"} {...others} />);
}

export default Component;
