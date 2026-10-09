import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqs1-cc1h.css';
import '../../css/n/n4lpjqt0r.css';
import '../../css/n/nqub7rbvx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vqs1-cc1h"/><path class="n4lpjqt0r"/><path class="nqub7rbvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:trophy-48-bold"} {...others} />);
}

export default Component;
