import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9rzdmy5w.css';
import '../../css/z/zdxcevbat.css';
import '../../css/a/ayyx0bb8c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j9rzdmy5w"/><path class="zdxcevbat"/><path class="ayyx0bb8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lock-keyhole-20-bold"} {...others} />);
}

export default Component;
