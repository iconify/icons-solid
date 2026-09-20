import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xh-xhbc7x.css';
import '../../css/c/c8_x9wbzp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xh-xhbc7x"/><path class="c8_x9wbzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:coffee-cold"} {...others} />);
}

export default Component;
