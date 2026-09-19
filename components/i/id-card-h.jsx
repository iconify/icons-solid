import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/w/wzzwdrbyq.css';
import '../../css/b/b2ktnsflo.css';
import '../../css/l/lurmblhlw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><rect class="wzzwdrbyq"/><path class="b2ktnsflo"/><path class="lurmblhlw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:id-card-h"} {...others} />);
}

export default Component;
