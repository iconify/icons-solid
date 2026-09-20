import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0lx0cb_d.css';
import '../../css/w/wmq89w7_p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r0lx0cb_d"/><path class="wmq89w7_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:system-marked-filled"} {...others} />);
}

export default Component;
