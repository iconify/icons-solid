import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/h/h4mqdv.css';
import '../../css/o/o4_xet.css';
import '../../css/x/xmkx1n.css';
import '../../css/r/rw5kru.css';
import '../../css/s/so-from-20.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c h4mqdv"/><path class="a0m25c o4_xet"/><path class="a0m25c xmkx1n"/><path class="a0m25c rw5kru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:hash"} {...others} />);
}

export default Component;
