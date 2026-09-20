import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rgpbbbb1c.css';
import '../../css/j/j2fajacou.css';
import '../../css/t/tg3ffvmkc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rgpbbbb1c"/><path class="j2fajacou"/><path class="tg3ffvmkc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:paint-brush-line-duotone"} {...others} />);
}

export default Component;
