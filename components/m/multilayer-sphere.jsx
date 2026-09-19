import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/k/kb9zbkb1z.css';
import '../../css/z/zmsq03bpv.css';
import '../../css/t/trcgzmrhd.css';
import '../../css/p/p1gk10bjl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><circle class="kb9zbkb1z"/><path class="zmsq03bpv"/><path class="trcgzmrhd"/><path class="p1gk10bjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:multilayer-sphere"} {...others} />);
}

export default Component;
