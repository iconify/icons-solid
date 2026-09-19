import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nwc03jzoe.css';
import '../../css/z/zalphcmjo.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nwc03jzoe"/><path class="zalphcmjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:progress-bar"} {...others} />);
}

export default Component;
