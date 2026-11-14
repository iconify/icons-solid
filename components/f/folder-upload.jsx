import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gvls4cbah.css';
import '../../css/a/a0c3lvbkm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gvls4cbah"/><path class="a0c3lvbkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-upload"} {...others} />);
}

export default Component;
