import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yuydnlagw.css';
import '../../css/g/gxfcybl7l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yuydnlagw"/><path class="gxfcybl7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hand-helping"} {...others} />);
}

export default Component;
