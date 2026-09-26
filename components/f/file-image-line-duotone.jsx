import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dzhy5s32h.css';
import '../../css/z/zz_clmbsh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dzhy5s32h"/><path class="zz_clmbsh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-image-line-duotone"} {...others} />);
}

export default Component;
