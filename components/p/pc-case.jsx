import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b-alg6mhi.css';
import '../../css/v/vsn7mmmxi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b-alg6mhi"/><path class="vsn7mmmxi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pc-case"} {...others} />);
}

export default Component;
