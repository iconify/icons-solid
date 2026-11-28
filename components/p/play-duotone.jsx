import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s58z6bw5e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="primary s58z6bw5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:play-duotone"} {...others} />);
}

export default Component;
