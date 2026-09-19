import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yj2dy6ioy.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="yj2dy6ioy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:click"} {...others} />);
}

export default Component;
