import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/ljkplmvoy.css';
import '../../css/w/w9_ugvb0e.css';
import '../../css/h/hfutfmpoa.css';
import '../../css/i/i9gyr2bxw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ljkplmvoy"/><path class="w9_ugvb0e"/><path class="hfutfmpoa"/><path class="i9gyr2bxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sword-02"} {...others} />);
}

export default Component;
