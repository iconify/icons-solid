import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/ieafnjwsq.css';
import '../../css/t/t7ttk7b7h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ieafnjwsq"/><path class="t7ttk7b7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:layout-list"} {...others} />);
}

export default Component;
