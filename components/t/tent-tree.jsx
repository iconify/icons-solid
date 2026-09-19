import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p9vjoqtlo.css';
import '../../css/w/wubqooj-f.css';
import '../../css/o/onxfb1bcg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="p9vjoqtlo"/><path class="wubqooj-f"/><path class="onxfb1bcg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tent-tree"} {...others} />);
}

export default Component;
