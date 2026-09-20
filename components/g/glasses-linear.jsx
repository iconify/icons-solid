import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pl16qnbxx.css';
import '../../css/z/z5v2vbbdr.css';
import '../../css/t/tvsmzbc4f.css';
import '../../css/k/kmnkyjbzd.css';
import '../../css/d/dpot8pbuy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="pl16qnbxx"/><circle class="z5v2vbbdr"/><path class="tvsmzbc4f"/><path class="kmnkyjbzd"/><path class="dpot8pbuy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:glasses-linear"} {...others} />);
}

export default Component;
