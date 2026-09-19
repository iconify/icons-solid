import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqbkv8u2i.css';
import '../../css/a/an0_1xo_x.css';
import '../../css/o/o1d5h2b_p.css';
import '../../css/d/d10519b8z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wqbkv8u2i"/><circle class="an0_1xo_x"/><circle class="o1d5h2b_p"/><path class="d10519b8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-happy-alt"} {...others} />);
}

export default Component;
