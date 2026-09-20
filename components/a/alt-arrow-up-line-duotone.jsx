import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s_mr-hbpj.css';
import '../../css/y/yj0yf9o2f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s_mr-hbpj"/><path class="yj0yf9o2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:alt-arrow-up-line-duotone"} {...others} />);
}

export default Component;
