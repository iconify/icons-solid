import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqbkv8u2i.css';
import '../../css/l/l1tdjlb-d.css';
import '../../css/b/b12gxvr_k.css';
import '../../css/r/r_6o9d_-l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wqbkv8u2i"/><circle class="l1tdjlb-d"/><circle class="b12gxvr_k"/><circle class="r_6o9d_-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-bowling-ball"} {...others} />);
}

export default Component;
