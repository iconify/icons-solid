import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/a/ab6j9p.css';
import '../../css/j/jzrnzz.css';
import '../../css/x/xr4k_q.css';
import '../../css/s/so-from-12.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c ab6j9p"/><path class="a0m25c jzrnzz"/><path class="a0m25c xr4k_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:chevron-triple-down"} {...others} />);
}

export default Component;
