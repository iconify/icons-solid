import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/h7tcblg-d.css';
import '../../css/i/in05zubxy.css';
import '../../css/o/ovsjx9qgy.css';
import '../../css/j/j3l3upm6m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="h7tcblg-d"/><circle class="in05zubxy"/><circle class="ovsjx9qgy"/><path class="j3l3upm6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:swimsuit"} {...others} />);
}

export default Component;
