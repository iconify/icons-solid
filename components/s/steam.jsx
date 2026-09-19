import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lve74zb5j.css';
import '../../css/u/upwrz4bah.css';
import '../../css/k/kaojb14_w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lve74zb5j"/><path class="upwrz4bah"/><path class="kaojb14_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:steam"} {...others} />);
}

export default Component;
