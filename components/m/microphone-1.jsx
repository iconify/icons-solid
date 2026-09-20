import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gt_tunb1d.css';
import '../../css/k/kpwzw_ndq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gt_tunb1d"/><path class="kpwzw_ndq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:microphone-1"} {...others} />);
}

export default Component;
