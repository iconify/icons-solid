import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lnc4c1gzh.css';
import '../../css/z/zsivi9bzc.css';
import '../../css/d/d3-3v1nvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lnc4c1gzh"/><path class="zsivi9bzc"/><path class="d3-3v1nvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:clipboard-tick"} {...others} />);
}

export default Component;
