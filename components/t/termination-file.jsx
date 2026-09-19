import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/b/bzf9gu18d.css';
import '../../css/q/q_lp42tom.css';
import '../../css/g/gbyxz8bjc.css';
import '../../css/b/bub5_hplj.css';
import '../../css/z/zaf4hyqkv.css';
import '../../css/i/iyhffabtm.css';
import '../../css/x/xbxqm3onb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><path class="bzf9gu18d"/><path class="q_lp42tom"/><path class="gbyxz8bjc"/><path class="bub5_hplj"/><path class="zaf4hyqkv"/><path class="iyhffabtm"/><path class="xbxqm3onb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:termination-file"} {...others} />);
}

export default Component;
