import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ymi0nr0jc.css';
import '../../css/x/xskfa_btk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ymi0nr0jc"/><path class="xskfa_btk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:verify"} {...others} />);
}

export default Component;
