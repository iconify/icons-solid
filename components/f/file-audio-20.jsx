import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szahujb-p.css';
import '../../css/b/btgf0khhi.css';
import '../../css/a/ar8noqkkg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="szahujb-p"/><path class="btgf0khhi"/><path class="ar8noqkkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-audio-20"} {...others} />);
}

export default Component;
