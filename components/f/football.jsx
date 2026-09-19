import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z7k2icbul.css';
import '../../css/k/kwtxje57q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z7k2icbul"/><path class="kwtxje57q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:football"} {...others} />);
}

export default Component;
