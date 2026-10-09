import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9qmy2bro.css';
import '../../css/x/xbe1ae31o.css';
import '../../css/o/o0b52w97m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o9qmy2bro"/><path class="xbe1ae31o"/><path class="o0b52w97m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wand-48"} {...others} />);
}

export default Component;
