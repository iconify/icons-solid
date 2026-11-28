import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qupa7dizo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qupa7dizo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:dice-d8-solid"} {...others} />);
}

export default Component;
