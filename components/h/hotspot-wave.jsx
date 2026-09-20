import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p07tmccvv.css';
import '../../css/a/a6a2xdvpq.css';
import '../../css/r/rxh-dulfz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="p07tmccvv"><path class="a6a2xdvpq"/><path class="rxh-dulfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:hotspot-wave"} {...others} />);
}

export default Component;
