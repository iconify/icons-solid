import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6vnyqb9w.css';
import '../../css/w/wk8vleb1u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i6vnyqb9w"/><path class="wk8vleb1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mute"} {...others} />);
}

export default Component;
