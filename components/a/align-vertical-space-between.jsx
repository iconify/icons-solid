import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pl8h2wwbk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pl8h2wwbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:align-vertical-space-between"} {...others} />);
}

export default Component;
