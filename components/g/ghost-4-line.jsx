import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/up7s9rbgu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="up7s9rbgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:ghost-4-line"} {...others} />);
}

export default Component;
