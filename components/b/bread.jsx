import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/e/eulhlv28r.css';
import '../../css/s/svh5-pb2i.css';
import '../../css/l/l8n1jlfnk.css';
import '../../css/y/ye9qvge6a.css';
import '../../css/e/em5klewjc.css';
import '../../css/b/bw3pd2p5x.css';
import '../../css/r/r203fdbix.css';
import '../../css/w/wgjn4h27i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><path class="eulhlv28r"/><path class="svh5-pb2i"/><path class="l8n1jlfnk"/><path class="ye9qvge6a"/><path class="em5klewjc"/><path class="bw3pd2p5x"/><path class="r203fdbix"/><path class="wgjn4h27i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bread"} {...others} />);
}

export default Component;
