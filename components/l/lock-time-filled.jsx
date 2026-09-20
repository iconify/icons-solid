import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fuksi0y_p.css';
import '../../css/w/ww5a72t8o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fuksi0y_p"/><path class="ww5a72t8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:lock-time-filled"} {...others} />);
}

export default Component;
