import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/r/rdpygh3qj.css';
import '../../css/y/y3c69sbrh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="rdpygh3qj"/><path class="y3c69sbrh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:shuffle-one"} {...others} />);
}

export default Component;
