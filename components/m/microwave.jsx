import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kjgs8i50v.css';
import '../../css/l/l9lvakqfo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kjgs8i50v"/><path class="l9lvakqfo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:microwave"} {...others} />);
}

export default Component;
