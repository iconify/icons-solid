import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/adzmbekhm.css';
import '../../css/v/vmp526bma.css';
import '../../css/o/oitlr0dsc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="adzmbekhm"/><path class="vmp526bma"/><path class="oitlr0dsc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:html-five"} {...others} />);
}

export default Component;
