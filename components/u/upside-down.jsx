import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqbkv8u2i.css';
import '../../css/a/a-nr90z_g.css';
import '../../css/i/ikrkupm8l.css';
import '../../css/o/ockxf75_m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wqbkv8u2i"/><path class="a-nr90z_g"/><circle class="ikrkupm8l"/><circle class="ockxf75_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:upside-down"} {...others} />);
}

export default Component;
