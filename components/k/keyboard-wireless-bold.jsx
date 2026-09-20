import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zh0g8fv5q.css';
import '../../css/r/rpjopu3ap.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zh0g8fv5q"/><path class="rpjopu3ap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:keyboard-wireless-bold"} {...others} />);
}

export default Component;
