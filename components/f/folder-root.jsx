import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jgod2lmxo.css';
import '../../css/d/d34t52bcx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jgod2lmxo"/><path class="d34t52bcx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-root"} {...others} />);
}

export default Component;
