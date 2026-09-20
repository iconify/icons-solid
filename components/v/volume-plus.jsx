import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/y/yg6rpf.css';
import '../../css/c/c-6jkr.css';
import '../../css/o/oy7p5c.css';
import '../../css/s/so-from-34.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c yg6rpf"/><path class="a0m25c c-6jkr"/><path class="a0m25c oy7p5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:volume-plus"} {...others} />);
}

export default Component;
