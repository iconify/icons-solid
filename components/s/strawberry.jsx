import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/l/lzfy0-vpg.css';
import '../../css/p/pxwbsz6oq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="lzfy0-vpg"/><path class="pxwbsz6oq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:strawberry"} {...others} />);
}

export default Component;
