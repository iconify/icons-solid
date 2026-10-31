import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ztnllf43t.css';
import '../../css/z/zc-w15bqg.css';
import '../../css/l/lqrf3bcko.css';
import '../../css/y/yrhgbiwpi.css';
import '../../css/g/gwwb2lbsq.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="ztnllf43t"/><path class="zc-w15bqg"/><path class="lqrf3bcko"/><path class="yrhgbiwpi"/><path class="gwwb2lbsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:french-southern-territories"} {...others} />);
}

export default Component;
