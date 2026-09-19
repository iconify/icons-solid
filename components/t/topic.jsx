import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/w/wb3mwmbun.css';
import '../../css/z/zp7rzkbkq.css';
import '../../css/g/gde01rm7l.css';
import '../../css/y/yruw9vbqy.css';
import '../../css/s/s029glbdj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="wb3mwmbun"/><path class="zp7rzkbkq"/><path class="gde01rm7l"/><path class="yruw9vbqy"/><path class="s029glbdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:topic"} {...others} />);
}

export default Component;
