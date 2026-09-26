import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gw6llof_t.css';
import '../../css/a/ax2a_u0ki.css';
import '../../css/d/di4tvaczb.css';
import '../../css/j/jdgij1_su.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gw6llof_t"/><path class="ax2a_u0ki"/><path class="di4tvaczb"/><path class="jdgij1_su"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-left-right-line-duotone"} {...others} />);
}

export default Component;
