import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8rtl1bmh.css';
import '../../css/k/kcrnsgfwg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u8rtl1bmh"/><path class="kcrnsgfwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:cloud-upload"} {...others} />);
}

export default Component;
