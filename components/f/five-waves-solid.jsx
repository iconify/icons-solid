import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fj0xv2bnx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fj0xv2bnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:five-waves-solid"} {...others} />);
}

export default Component;
