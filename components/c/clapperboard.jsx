import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pnyixewgj.css';
import '../../css/l/lghd5mbme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="pnyixewgj"/><path class="lghd5mbme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:clapperboard"} {...others} />);
}

export default Component;
