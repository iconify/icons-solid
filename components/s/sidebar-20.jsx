import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewn1ke3br.css';
import '../../css/e/e3k76dbuq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ewn1ke3br"/><path class="e3k76dbuq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sidebar-20"} {...others} />);
}

export default Component;
