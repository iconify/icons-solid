import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqbkv8u2i.css';
import '../../css/f/fl-0a17_a.css';
import '../../css/z/ze9xnfzdp.css';
import '../../css/k/kf8q499td.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wqbkv8u2i"/><path class="fl-0a17_a"/><circle class="ze9xnfzdp"/><path class="kf8q499td"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:wink-smile"} {...others} />);
}

export default Component;
