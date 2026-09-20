import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sko-q4bya.css';
import '../../css/w/ww5a72t8o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sko-q4bya"/><path class="ww5a72t8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:delete-time-filled"} {...others} />);
}

export default Component;
