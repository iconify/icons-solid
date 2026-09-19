import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/obk3gsbvw.css';
import '../../css/a/az5cakobb.css';
import '../../css/n/nvarbzb-o.css';
import '../../css/x/xaiz4xbmd.css';
import '../../css/e/eqne90b8g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="obk3gsbvw"/><path class="az5cakobb"/><circle class="nvarbzb-o"/><path class="xaiz4xbmd"/><circle class="eqne90b8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:shopping-bag"} {...others} />);
}

export default Component;
