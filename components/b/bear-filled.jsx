import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8yo2xlul.css';
import '../../css/w/wth0vybwk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l8yo2xlul"/><path class="wth0vybwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:bear-filled"} {...others} />);
}

export default Component;
