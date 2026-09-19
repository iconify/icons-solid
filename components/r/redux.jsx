import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uy-61duhk.css';
import '../../css/m/modq6pbhs.css';
import '../../css/l/lixkakb-i.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="uy-61duhk"/><path class="modq6pbhs"/><path class="lixkakb-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:redux"} {...others} />);
}

export default Component;
