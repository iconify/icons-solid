import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uqnu7xbid.css';
import '../../css/f/fw-cofgvd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uqnu7xbid"/><path class="fw-cofgvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:pacman"} {...others} />);
}

export default Component;
