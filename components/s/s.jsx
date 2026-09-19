import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0xfudpeb.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="o0xfudpeb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:s"} {...others} />);
}

export default Component;
