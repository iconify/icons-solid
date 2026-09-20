import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lurpk9itd.css';
import '../../css/v/vf7wzobiw.css';
import '../../css/y/ye5v0kb6s.css';
import '../../css/z/z7w8u-bgf.css';
import '../../css/h/hkf_44bqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lurpk9itd"/><circle class="vf7wzobiw"/><path class="ye5v0kb6s"/><path class="z7w8u-bgf"/><path class="hkf_44bqq"/><path class="z7w8u-bgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-music-2-linear"} {...others} />);
}

export default Component;
