import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ds858oo5g.css';
import '../../css/w/wqbkv8u2i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ds858oo5g"/><path class="wqbkv8u2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:heart-circle"} {...others} />);
}

export default Component;
