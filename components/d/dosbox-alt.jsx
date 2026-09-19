import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/owkcs8bdj.css';

const viewBox = {"width":456,"height":512};
const content = `<path clip-rule="evenodd" class="owkcs8bdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:dosbox-alt"} {...others} />);
}

export default Component;
