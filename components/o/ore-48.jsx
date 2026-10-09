import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wtxtpbb-v.css';
import '../../css/w/wrzlzeb2x.css';
import '../../css/j/j3iwccb5d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wtxtpbb-v"/><path class="wrzlzeb2x"/><path class="j3iwccb5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ore-48"} {...others} />);
}

export default Component;
