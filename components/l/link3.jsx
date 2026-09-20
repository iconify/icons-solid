import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w__6_zpen.css';
import '../../css/c/c9_h_d6ct.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w__6_zpen"/><path class="c9_h_d6ct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:link3"} {...others} />);
}

export default Component;
