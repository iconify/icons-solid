import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/w/wq48j3b9c.css';
import '../../css/l/lmsc4wpml.css';
import '../../css/e/ex2tmdbgw.css';
import '../../css/y/yu1wiob5p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="wq48j3b9c"/><circle class="lmsc4wpml"/><path class="ex2tmdbgw"/><path class="yu1wiob5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:archery"} {...others} />);
}

export default Component;
