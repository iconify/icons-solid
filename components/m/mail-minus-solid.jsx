import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkd9d5s_w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pkd9d5s_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:mail-minus-solid"} {...others} />);
}

export default Component;
