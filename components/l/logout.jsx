import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rahk9_b2d.css';
import '../../css/x/xjog0ebft.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rahk9_b2d"/><path class="xjog0ebft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:logout"} {...others} />);
}

export default Component;
