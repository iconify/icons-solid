import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xd5y4xbre.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xd5y4xbre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:more-menu-vertical"} {...others} />);
}

export default Component;
