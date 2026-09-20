import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7_dlbcgs.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="w7_dlbcgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:night-alt-rain-wind"} {...others} />);
}

export default Component;
