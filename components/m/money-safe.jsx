import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qj1-j9xsl.css';
import '../../css/v/vgoil6b-g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qj1-j9xsl"/><path class="vgoil6b-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-safe"} {...others} />);
}

export default Component;
