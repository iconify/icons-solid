import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pgwf7peyp.css';
import '../../css/w/wa1i67b-j.css';
import '../../css/k/kyhrmps2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="pgwf7peyp"/><path class="wa1i67b-j"/><path class="kyhrmps2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:presentation-07"} {...others} />);
}

export default Component;
