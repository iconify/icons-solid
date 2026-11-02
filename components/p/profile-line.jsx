import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmke3m5bt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fmke3m5bt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:profile-line"} {...others} />);
}

export default Component;
