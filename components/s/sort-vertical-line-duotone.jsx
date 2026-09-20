import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f75s_sbbx.css';
import '../../css/j/jwe4axb7c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f75s_sbbx"/><path class="jwe4axb7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sort-vertical-line-duotone"} {...others} />);
}

export default Component;
