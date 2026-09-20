import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bcr5hg0io.css';
import '../../css/k/kywzeybcp.css';
import '../../css/r/rwd4y-b8p.css';
import '../../css/b/bxm48z6-c.css';
import '../../css/z/ze-w35bmh.css';
import '../../css/u/u_8ridb7v.css';
import '../../css/n/ny4icbb5m.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bcr5hg0io"/><path class="kywzeybcp"/><path clip-rule="evenodd" class="rwd4y-b8p"/><path class="bxm48z6-c"/><path class="ze-w35bmh"/><path class="u_8ridb7v"/><path class="ny4icbb5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:color-swatches"} {...others} />);
}

export default Component;
