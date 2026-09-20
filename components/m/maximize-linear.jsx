import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o35tmfo7o.css';
import '../../css/s/sxv1zyb9f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o35tmfo7o"/><path class="sxv1zyb9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:maximize-linear"} {...others} />);
}

export default Component;
