import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/at0wocbmy.css';
import '../../css/r/rk2p0fx6y.css';
import '../../css/b/b6ri4w3zb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="at0wocbmy"/><path class="rk2p0fx6y"/><path class="b6ri4w3zb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:diagram-split-horizontal"} {...others} />);
}

export default Component;
