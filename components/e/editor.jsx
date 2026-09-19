import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/r/r6ry4vbgb.css';
import '../../css/g/gb25t4baj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="r6ry4vbgb"/><path class="gb25t4baj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:editor"} {...others} />);
}

export default Component;
