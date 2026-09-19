import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/byq_hdc2m.css';
import '../../css/u/um04zob7r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="byq_hdc2m"/><path class="um04zob7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-zip"} {...others} />);
}

export default Component;
