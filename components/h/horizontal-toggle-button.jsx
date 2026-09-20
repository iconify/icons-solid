import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/g/g-u_44bdp.css';
import '../../css/z/zndh0nd2a.css';
import '../../css/y/y7t-sdlrf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="g-u_44bdp"/><path class="zndh0nd2a"/><path class="y7t-sdlrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:horizontal-toggle-button"} {...others} />);
}

export default Component;
