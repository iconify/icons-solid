import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kexdcibjn.css';
import '../../css/g/ggqjhtbos.css';
import '../../css/m/mraa0lb0l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kexdcibjn"/><path class="ggqjhtbos"/><path class="mraa0lb0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wine-glass-20-bold"} {...others} />);
}

export default Component;
