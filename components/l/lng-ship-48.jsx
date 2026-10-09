import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kv3v9_bgq.css';
import '../../css/w/wegdy5b4f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kv3v9_bgq"/><path class="wegdy5b4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lng-ship-48"} {...others} />);
}

export default Component;
