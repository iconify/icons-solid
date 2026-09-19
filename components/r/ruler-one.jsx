import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/b/bz40u0bir.css';
import '../../css/o/o6ow2nvyg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="bz40u0bir"/><path class="o6ow2nvyg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:ruler-one"} {...others} />);
}

export default Component;
