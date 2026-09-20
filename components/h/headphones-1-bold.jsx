import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy26aup1d.css';
import '../../css/w/w5x0zccyo.css';
import '../../css/k/kv7e38bui.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jy26aup1d"/><path class="w5x0zccyo"/><path class="kv7e38bui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:headphones-1-bold"} {...others} />);
}

export default Component;
