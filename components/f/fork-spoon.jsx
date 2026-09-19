import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi2zpy8jf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bi2zpy8jf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:fork-spoon"} {...others} />);
}

export default Component;
