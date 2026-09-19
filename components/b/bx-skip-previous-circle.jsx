import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqbkv8u2i.css';
import '../../css/c/cwqs4oozk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wqbkv8u2i"/><path class="cwqs4oozk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-skip-previous-circle"} {...others} />);
}

export default Component;
