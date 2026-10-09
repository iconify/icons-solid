import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hliyo-bto.css';
import '../../css/p/pxuausb5x.css';
import '../../css/v/vy9bxel0f.css';
import '../../css/r/ra4sd8ben.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hliyo-bto"/><path class="pxuausb5x"/><path class="vy9bxel0f"/><path class="ra4sd8ben"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:e-motorcycle-48-bold"} {...others} />);
}

export default Component;
