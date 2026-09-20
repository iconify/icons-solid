import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jd3kq3buz.css';
import '../../css/b/bx_g37uox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jd3kq3buz"/><path class="bx_g37uox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:slider-horizontal"} {...others} />);
}

export default Component;
