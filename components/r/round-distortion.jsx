import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/k/kb9zbkb1z.css';
import '../../css/o/o9o2-obrk.css';
import '../../css/p/pxwibebni.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><circle class="kb9zbkb1z"/><path class="o9o2-obrk"/><path class="pxwibebni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:round-distortion"} {...others} />);
}

export default Component;
