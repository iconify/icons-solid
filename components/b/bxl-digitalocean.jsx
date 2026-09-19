import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pl2ih_b2x.css';
import '../../css/q/qrgcibvkl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pl2ih_b2x"/><path class="qrgcibvkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-digitalocean"} {...others} />);
}

export default Component;
