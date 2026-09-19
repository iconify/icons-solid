import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xi7esbcle.css';
import '../../css/j/jdhwocc4i.css';
import '../../css/e/ehv-evg_q.css';
import '../../css/o/oqynatbcn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="xi7esbcle"/><path class="jdhwocc4i"/><circle class="ehv-evg_q"/><circle class="oqynatbcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:peas"} {...others} />);
}

export default Component;
