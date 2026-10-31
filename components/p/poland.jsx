import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/arptzobve.css';
import '../../css/x/xomdi8b2s.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="arptzobve"/><path class="xomdi8b2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:poland"} {...others} />);
}

export default Component;
