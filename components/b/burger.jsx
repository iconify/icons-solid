import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/l/l-yezxxsj.css';
import '../../css/t/ttg6xbbqc.css';
import '../../css/x/xer7ldb1s.css';
import '../../css/w/w4f1phn-n.css';
import '../../css/b/bgd-jmbsm.css';
import '../../css/q/qs5ud3bjj.css';
import '../../css/q/q8zlhukvj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="l-yezxxsj"/><path class="ttg6xbbqc"/><path class="wm-k xer7ldb1s"/><path class="w4f1phn-n wm-a"/><path class="bgd-jmbsm"/><path class="qs5ud3bjj"/><path class="q8zlhukvj wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:burger"} {...others} />);
}

export default Component;
