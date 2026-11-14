import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/idhzit1_z.css';
import '../../css/z/zxw0ofxyz.css';
import '../../css/n/nt3ymrbmn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="idhzit1_z"/><path class="zxw0ofxyz"/><path class="nt3ymrbmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:analytics-up"} {...others} />);
}

export default Component;
