import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw1zs5b9h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iw1zs5b9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:editorconfig"} {...others} />);
}

export default Component;
