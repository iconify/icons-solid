import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b3l5nwb6v.css';
import '../../css/p/pk10can8u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b3l5nwb6v"/><path class="pk10can8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wrap-text-48"} {...others} />);
}

export default Component;
