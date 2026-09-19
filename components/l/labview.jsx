import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6be-kb4s.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="a6be-kb4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:labview"} {...others} />);
}

export default Component;
