import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7f4pj88b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c7f4pj88b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:v8-turbofan"} {...others} />);
}

export default Component;
