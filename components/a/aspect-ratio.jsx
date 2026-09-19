import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wwm7e5bjt.css';
import '../../css/v/vfar9mhjw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="wwm7e5bjt"/><path class="vfar9mhjw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:aspect-ratio"} {...others} />);
}

export default Component;
