import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ybt3-tb8r.css';
import '../../css/z/zy6p_hb5h.css';
import '../../css/n/ngtc8_bij.css';
import '../../css/v/v2gayrbrl.css';
import '../../css/w/w_ibdivmi.css';
import '../../css/f/f-tuh0pse.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ybt3-tb8r"/><path class="zy6p_hb5h"/><path class="ngtc8_bij"/><path class="v2gayrbrl"/><path class="w_ibdivmi"/><path class="f-tuh0pse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:meeting-remote"} {...others} />);
}

export default Component;
