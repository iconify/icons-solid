import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/batmvgb8l.css';
import '../../css/k/ks20pegmu.css';
import '../../css/d/dczvvtbjx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="batmvgb8l"/><path class="ks20pegmu"/><path class="dczvvtbjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:speaker-48"} {...others} />);
}

export default Component;
