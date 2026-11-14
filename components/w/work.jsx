import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sa8m40o9w.css';
import '../../css/l/lcrisfboa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sa8m40o9w"/><path class="lcrisfboa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:work"} {...others} />);
}

export default Component;
