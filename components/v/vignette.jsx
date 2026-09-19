import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ysjxyibud.css';
import '../../css/h/hipmx6vje.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ysjxyibud"/><path class="hipmx6vje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:vignette"} {...others} />);
}

export default Component;
