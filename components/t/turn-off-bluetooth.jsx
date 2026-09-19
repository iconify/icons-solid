import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/u/ug3yyhc4i.css';
import '../../css/c/cs90qrjjg.css';
import '../../css/l/ljgcpcuxn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="ug3yyhc4i"/><path class="cs90qrjjg"/><path class="ljgcpcuxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:turn-off-bluetooth"} {...others} />);
}

export default Component;
