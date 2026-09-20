import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-q9jk35j.css';
import '../../css/z/z9rr_ubxh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w-q9jk35j"/><path class="z9rr_ubxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:sidebar-expand-24"} {...others} />);
}

export default Component;
