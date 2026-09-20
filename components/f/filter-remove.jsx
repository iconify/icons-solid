import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/q/q-eob553s.css';
import '../../css/m/m__pa4blm.css';
import '../../css/z/zaw73nbiu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="q-eob553s"/><path class="m__pa4blm"/><path class="zaw73nbiu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:filter-remove"} {...others} />);
}

export default Component;
