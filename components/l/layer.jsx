import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xrjvalbrz.css';
import '../../css/y/y96tq1brp.css';
import '../../css/i/ito-ncoyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xrjvalbrz"/><path class="y96tq1brp"/><path class="ito-ncoyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:layer"} {...others} />);
}

export default Component;
