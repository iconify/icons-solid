import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gjbjml9vz.css';
import '../../css/e/e59hm6z0z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gjbjml9vz"/><path class="e59hm6z0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:usdt"} {...others} />);
}

export default Component;
