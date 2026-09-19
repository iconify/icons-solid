import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xjtvz0evg.css';
import '../../css/l/lzklgxbax.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xjtvz0evg"/><path class="lzklgxbax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:been-here"} {...others} />);
}

export default Component;
