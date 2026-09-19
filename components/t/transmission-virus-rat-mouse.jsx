import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ewjz88bei.css';
import '../../css/x/xef9tt_eb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ewjz88bei"/><path class="xef9tt_eb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:transmission-virus-rat-mouse"} {...others} />);
}

export default Component;
