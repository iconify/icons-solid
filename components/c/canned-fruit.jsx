import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/s/sh6lbgc5j.css';
import '../../css/m/mem1epv9o.css';
import '../../css/g/gb8wnryjx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="sh6lbgc5j"/><path class="mem1epv9o"/><path class="gb8wnryjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:canned-fruit"} {...others} />);
}

export default Component;
