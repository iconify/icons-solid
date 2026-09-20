import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/m/m7h26_b5s.css';
import '../../css/d/dke6ejbnw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="m7h26_b5s"/><path class="dke6ejbnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:panoramic-screen"} {...others} />);
}

export default Component;
