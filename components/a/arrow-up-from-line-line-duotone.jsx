import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a8axvdbak.css';
import '../../css/t/tg58zp32w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a8axvdbak"/><path class="tg58zp32w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-up-from-line-line-duotone"} {...others} />);
}

export default Component;
