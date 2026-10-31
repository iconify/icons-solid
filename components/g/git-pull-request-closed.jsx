import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/b/bjml61_qo.css';
import '../../css/b/bkqngzb1q.css';
import '../../css/z/zz6pr5t4p.css';
import '../../css/a/aai8m-gvf.css';
import '../../css/k/k1tm_ow9l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="bjml61_qo"/><path class="bkqngzb1q wm-shine"/><path class="wm-k zz6pr5t4p"/><path class="aai8m-gvf wm-s"/><path class="k1tm_ow9l wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:git-pull-request-closed"} {...others} />);
}

export default Component;
