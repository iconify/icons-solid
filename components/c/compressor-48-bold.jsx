import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umn48nmev.css';
import '../../css/o/oz88olb9k.css';
import '../../css/k/kc2kqxrec.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="umn48nmev"/><path class="oz88olb9k"/><path class="kc2kqxrec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:compressor-48-bold"} {...others} />);
}

export default Component;
