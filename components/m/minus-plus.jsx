import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rovpu9_sx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rovpu9_sx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:minus-plus"} {...others} />);
}

export default Component;
