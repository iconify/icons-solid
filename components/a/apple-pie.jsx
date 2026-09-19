import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ob856wmpp.css';
import '../../css/k/k8-4ytbpp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ob856wmpp"/><path class="k8-4ytbpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:apple-pie"} {...others} />);
}

export default Component;
