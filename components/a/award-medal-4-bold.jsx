import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ycs9x2bve.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ycs9x2bve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:award-medal-4-bold"} {...others} />);
}

export default Component;
