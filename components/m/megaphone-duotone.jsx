import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qwuzebcck.css';
import '../../css/e/ey9o68b2p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qwuzebcck"/><path class="ey9o68b2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:megaphone-duotone"} {...others} />);
}

export default Component;
