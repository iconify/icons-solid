import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/d/ddx_6x.css';
import '../../css/d/d-uxzh.css';
import '../../css/i/idmydr.css';
import '../../css/s/so-to-0.css';
import '../../css/s/so-from-20.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c ddx_6x"/><path class="a0m25c d-uxzh"/><path class="a0m25c idmydr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:edit"} {...others} />);
}

export default Component;
