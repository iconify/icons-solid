import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jsy9-fwnj.css';
import '../../css/v/vemdn0bqs.css';
import '../../css/z/zlopywbwc.css';
import '../../css/r/ruoobvlrj.css';
import '../../css/p/p552hfbgz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jsy9-fwnj"/><path class="vemdn0bqs"/><path class="zlopywbwc"/><path class="ruoobvlrj"/><path class="p552hfbgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:global-edit"} {...others} />);
}

export default Component;
