import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/p/pmw-rr.css';
import '../../css/h/h-ksjc.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fade-to-1.css';
import '../../css/s/so-from-6.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c pmw-rr"/><path class="a0m25c h-ksjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:cloud-alt-tags"} {...others} />);
}

export default Component;
