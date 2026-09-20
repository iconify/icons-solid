import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zaoe0hbtt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zaoe0hbtt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:anomaly"} {...others} />);
}

export default Component;
