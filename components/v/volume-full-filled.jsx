import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yenvhub-v.css';
import '../../css/f/ft3afwb6q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yenvhub-v"/><path class="ft3afwb6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:volume-full-filled"} {...others} />);
}

export default Component;
