import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ao-aiub9u.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="ao-aiub9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:dosbox"} {...others} />);
}

export default Component;
