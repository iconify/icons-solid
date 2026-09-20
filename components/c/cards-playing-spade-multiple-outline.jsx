import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oni-ybbts.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oni-ybbts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:cards-playing-spade-multiple-outline"} {...others} />);
}

export default Component;
