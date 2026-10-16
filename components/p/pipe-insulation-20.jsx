import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lz02lvbot.css';
import '../../css/z/z7r22xbex.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lz02lvbot"/><path class="z7r22xbex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pipe-insulation-20"} {...others} />);
}

export default Component;
