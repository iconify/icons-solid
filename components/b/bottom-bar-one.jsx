import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5ig9cc7s.css';

const viewBox = {"width":49,"height":48};
const content = `<path class="c5ig9cc7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bottom-bar-one"} {...others} />);
}

export default Component;
