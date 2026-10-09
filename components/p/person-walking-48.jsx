import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ym9ybcc6l.css';
import '../../css/x/xo930qbei.css';
import '../../css/e/e4ja3lute.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ym9ybcc6l"/><path class="xo930qbei"/><path class="e4ja3lute"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:person-walking-48"} {...others} />);
}

export default Component;
