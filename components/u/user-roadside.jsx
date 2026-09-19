import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mn_gx6bsn.css';
import '../../css/s/shsaom4fn.css';
import '../../css/a/ak3jr5b-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="mn_gx6bsn"/><path class="shsaom4fn"/><path class="ak3jr5b-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-roadside"} {...others} />);
}

export default Component;
