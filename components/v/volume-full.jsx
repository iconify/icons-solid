import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n30xjkbmn.css';
import '../../css/f/ft3afwb6q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n30xjkbmn"/><path class="ft3afwb6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:volume-full"} {...others} />);
}

export default Component;
