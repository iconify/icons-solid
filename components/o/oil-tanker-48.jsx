import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dssydwbjm.css';
import '../../css/u/uzp27665y.css';
import '../../css/z/zp5y05ahx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dssydwbjm"/><path class="uzp27665y"/><path class="zp5y05ahx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:oil-tanker-48"} {...others} />);
}

export default Component;
