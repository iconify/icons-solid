import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/a/af13mybgf.css';
import '../../css/b/bz2vyybde.css';
import '../../css/m/m49v12b7w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="af13mybgf"/><path class="bz2vyybde"/><path class="m49v12b7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:multi-rectangle"} {...others} />);
}

export default Component;
