import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/f/fja7r230c.css';
import '../../css/r/rlhd26bov.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="fja7r230c"/><path class="rlhd26bov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:optimize"} {...others} />);
}

export default Component;
