import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/o/opc6n7x1f.css';
import '../../css/b/ba1ovkaya.css';
import '../../css/f/fsx-yib6n.css';
import '../../css/j/j2yq9cb1n.css';
import '../../css/b/bivxh4swz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="opc6n7x1f"/><path class="ba1ovkaya"/><path class="fsx-yib6n"/><path class="j2yq9cb1n"/><circle class="bivxh4swz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sleep-two"} {...others} />);
}

export default Component;
