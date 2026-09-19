import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/i/i0xmk6bak.css';
import '../../css/o/o0mkz_b0e.css';
import '../../css/t/tmrc4obye.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="i0xmk6bak"/><path class="o0mkz_b0e"/><path class="tmrc4obye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:end-time-sort"} {...others} />);
}

export default Component;
