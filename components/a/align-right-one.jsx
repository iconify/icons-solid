import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/g/g5oougblb.css';
import '../../css/j/jjkm7ug5j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="g5oougblb"/><path class="jjkm7ug5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:align-right-one"} {...others} />);
}

export default Component;
