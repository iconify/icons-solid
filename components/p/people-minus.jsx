import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mpi1ahbrd.css';
import '../../css/b/b-x3ppb_j.css';
import '../../css/i/ic9ebcqwq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="mpi1ahbrd"/><path clip-rule="evenodd" class="b-x3ppb_j"/><path class="ic9ebcqwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:people-minus"} {...others} />);
}

export default Component;
