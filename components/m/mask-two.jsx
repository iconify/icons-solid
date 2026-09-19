import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/k/kb9zbkb1z.css';
import '../../css/y/yns35tu4u.css';
import '../../css/g/gczrd3bni.css';
import '../../css/n/n7urs7hsk.css';
import '../../css/v/vz1y-lh3n.css';
import '../../css/q/qoks_mjvw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><circle class="kb9zbkb1z"/><path class="yns35tu4u"/><path class="gczrd3bni"/><path class="n7urs7hsk"/><path class="vz1y-lh3n"/><path class="qoks_mjvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:mask-two"} {...others} />);
}

export default Component;
