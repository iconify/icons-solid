import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3pk9cb7p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e3pk9cb7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:music-off-outlined"} {...others} />);
}

export default Component;
