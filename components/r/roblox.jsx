import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v6my9fadk.css';
import '../../css/t/tmdjm3bnm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect transform="rotate(15 6.336 2.19)" class="v6my9fadk"/><rect transform="rotate(15 10.112 8.73)" class="tmdjm3bnm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:roblox"} {...others} />);
}

export default Component;
