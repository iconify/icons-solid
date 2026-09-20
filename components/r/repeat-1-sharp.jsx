import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgrr9qb8j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qgrr9qb8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:repeat-1-sharp"} {...others} />);
}

export default Component;
