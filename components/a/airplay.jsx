import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/r/rkrcdf-xu.css';
import '../../css/o/o38s0tnjw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="rkrcdf-xu"/><path class="o38s0tnjw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:airplay"} {...others} />);
}

export default Component;
