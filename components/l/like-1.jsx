import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/y/ynphs1b6n.css';
import '../../css/k/k-hnebcyh.css';
import '../../css/m/mj6zwrb-m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="ynphs1b6n"/><path class="k-hnebcyh"/><path class="mj6zwrb-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:like-1"} {...others} />);
}

export default Component;
