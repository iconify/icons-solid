import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lfzmnvd-w.css';
import '../../css/k/kz8f7vbhi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lfzmnvd-w"/><path class="kz8f7vbhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-up-20"} {...others} />);
}

export default Component;
