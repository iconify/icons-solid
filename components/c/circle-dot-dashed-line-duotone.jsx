import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uni9o8bbi.css';
import '../../css/k/kfn71cctn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uni9o8bbi"/><path class="kfn71cctn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:circle-dot-dashed-line-duotone"} {...others} />);
}

export default Component;
