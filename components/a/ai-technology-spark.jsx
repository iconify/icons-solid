import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/z/zl88d3bos.css';
import '../../css/s/sn_-k9lna.css';
import '../../css/l/lak6vjbnw.css';
import '../../css/v/vj8is_8kc.css';
import '../../css/d/dypm2q9hm.css';
import '../../css/o/oei_42bmd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="zl88d3bos"/><path class="sn_-k9lna"/><path clip-rule="evenodd" class="lak6vjbnw"/><path class="vj8is_8kc"/><path class="dypm2q9hm"/><path class="oei_42bmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:ai-technology-spark"} {...others} />);
}

export default Component;
