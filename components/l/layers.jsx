import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/f/fm_pldbjw.css';
import '../../css/r/rz6xoab1r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="fm_pldbjw"/><path class="rz6xoab1r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:layers"} {...others} />);
}

export default Component;
