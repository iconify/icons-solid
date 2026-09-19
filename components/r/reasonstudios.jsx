import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xa3hvldyw.css';

const viewBox = {"width":456,"height":512};
const content = `<path class="xa3hvldyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:reasonstudios"} {...others} />);
}

export default Component;
