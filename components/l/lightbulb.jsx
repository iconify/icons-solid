import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/yqx-b7b4t.css';
import '../../css/j/jdg7c2xsl.css';
import '../../css/e/empvr3yfh.css';
import '../../css/r/rnc5c5txp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="yqx-b7b4t"/><path class="jdg7c2xsl"/><path class="empvr3yfh"/><path class="rnc5c5txp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:lightbulb"} {...others} />);
}

export default Component;
