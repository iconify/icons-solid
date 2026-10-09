import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkarr2bij.css';
import '../../css/k/k6ocuztoi.css';
import '../../css/g/gv5tz0b7p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kkarr2bij"/><path class="k6ocuztoi"/><path class="gv5tz0b7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:socket-48-bold"} {...others} />);
}

export default Component;
