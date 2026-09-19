import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfj0fgbcy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hfj0fgbcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:code-slash-outline"} {...others} />);
}

export default Component;
