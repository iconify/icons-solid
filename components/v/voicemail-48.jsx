import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6id_b8os.css';
import '../../css/g/g-29xb7vu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p6id_b8os"/><path class="g-29xb7vu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:voicemail-48"} {...others} />);
}

export default Component;
