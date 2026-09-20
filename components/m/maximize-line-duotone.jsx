import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j-eh52bdl.css';
import '../../css/s/sxv1zyb9f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j-eh52bdl"/><path class="sxv1zyb9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:maximize-line-duotone"} {...others} />);
}

export default Component;
