import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sgzmasisn.css';
import '../../css/x/xycz9duzp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary sgzmasisn"/><path class="primary xycz9duzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:moon-duo"} {...others} />);
}

export default Component;
