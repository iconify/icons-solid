import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l-j09py8p.css';
import '../../css/m/m4c2jibyv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l-j09py8p"/><path class="m4c2jibyv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:tools"} {...others} />);
}

export default Component;
