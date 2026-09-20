import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvgdpzb2e.css';
import '../../css/b/bca8y5ikh.css';
import '../../css/g/g53rhqk2d.css';
import '../../css/u/uvd47t--g.css';
import '../../css/y/yemgbachf.css';
import '../../css/o/owo_eaclv.css';
import '../../css/n/nvfpuccka.css';
import '../../css/t/tifkypb9t.css';
import '../../css/x/x_2_5gbyg.css';
import '../../css/d/d6-_79bij.css';
import '../../css/p/p35lqgwep.css';
import '../../css/z/zbsg8nb5p.css';
import '../../css/f/fcqkspxmd.css';
import '../../css/k/kulbu1b3k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yvgdpzb2e"/><path class="bca8y5ikh"/><path class="g53rhqk2d"/><path class="uvd47t--g"/><path class="yemgbachf"/><path class="owo_eaclv"/><path class="nvfpuccka"/><path class="tifkypb9t"/><path class="x_2_5gbyg"/><path class="d6-_79bij"/><path class="p35lqgwep"/><path class="zbsg8nb5p"/><path class="fcqkspxmd"/><path class="kulbu1b3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:man-pouting-2"} {...others} />);
}

export default Component;
