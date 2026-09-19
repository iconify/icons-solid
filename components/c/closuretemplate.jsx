import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9l-ttbfy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h9l-ttbfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:closuretemplate"} {...others} />);
}

export default Component;
