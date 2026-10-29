import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/my_ilnbdt.css';
import '../../css/s/sgxsvf1wu.css';
import '../../css/w/wr4ds1bix.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="my_ilnbdt wm-shadow"/><path class="sgxsvf1wu wm-k"/><path class="wm-k wr4ds1bix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:paperclip"} {...others} />);
}

export default Component;
