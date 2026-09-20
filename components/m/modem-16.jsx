import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwgigf3lc.css';
import '../../css/o/ozoapvbsy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wwgigf3lc"/><path clip-rule="evenodd" class="ozoapvbsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:modem-16"} {...others} />);
}

export default Component;
