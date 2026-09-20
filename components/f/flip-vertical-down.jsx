import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/ruvbc5bnf.css';
import '../../css/e/e8bbq1b0c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ruvbc5bnf"/><path class="e8bbq1b0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:flip-vertical-down"} {...others} />);
}

export default Component;
