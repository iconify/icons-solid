import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jp0y3rb0u.css';
import '../../css/z/zxw2msv7q.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jp0y3rb0u"/><path class="zxw2msv7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-bookmark-1"} {...others} />);
}

export default Component;
