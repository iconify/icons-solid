import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b0c_ah97o.css';
import '../../css/s/s55t7eb7x.css';
import '../../css/p/pcrg3rbex.css';
import '../../css/c/cq26eac9g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="b0c_ah97o"/><path class="s55t7eb7x"/><path class="pcrg3rbex"/><path class="cq26eac9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:light-bulb-pop"} {...others} />);
}

export default Component;
