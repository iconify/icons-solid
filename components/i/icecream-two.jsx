import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/z/z2e5f5b3x.css';
import '../../css/e/e6ddg3v6m.css';
import '../../css/b/bvrids4iq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="z2e5f5b3x"/><path class="e6ddg3v6m"/><path class="bvrids4iq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:icecream-two"} {...others} />);
}

export default Component;
