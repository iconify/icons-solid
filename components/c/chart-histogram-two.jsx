import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ntnk9upyi.css';
import '../../css/t/twzr5ub1p.css';
import '../../css/b/batkyrymz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ntnk9upyi"/><path class="twzr5ub1p"/><path class="batkyrymz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:chart-histogram-two"} {...others} />);
}

export default Component;
