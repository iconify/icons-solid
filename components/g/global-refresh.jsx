import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jsy9-fwnj.css';
import '../../css/v/vemdn0bqs.css';
import '../../css/z/za6nmgbsw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jsy9-fwnj"/><path class="vemdn0bqs"/><path class="za6nmgbsw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:global-refresh"} {...others} />);
}

export default Component;
