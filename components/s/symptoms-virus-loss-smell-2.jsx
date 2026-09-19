import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t43qysp_i.css';
import '../../css/k/k7nf8gbbe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t43qysp_i"/><path class="k7nf8gbbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:symptoms-virus-loss-smell-2"} {...others} />);
}

export default Component;
