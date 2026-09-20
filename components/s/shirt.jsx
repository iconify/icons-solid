import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/n/n673ssb_v.css';
import '../../css/j/jgyw1vbcx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="n673ssb_v"/><path class="jgyw1vbcx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:shirt"} {...others} />);
}

export default Component;
