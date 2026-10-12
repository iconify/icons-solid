import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_pz3rxhk.css';
import '../../css/x/xl1kjw86u.css';
import '../../css/m/m9lmvkb5m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y_pz3rxhk"/><path class="xl1kjw86u"/><path class="m9lmvkb5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-audio-48-bold"} {...others} />);
}

export default Component;
