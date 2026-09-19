import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tbocj6b7k.css';
import '../../css/o/o0fpxi1ym.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="tbocj6b7k"/><path class="o0fpxi1ym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:zec"} {...others} />);
}

export default Component;
