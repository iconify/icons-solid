import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufj9n4bfr.css';
import '../../css/p/pv04-_f7u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ufj9n4bfr"/><path class="pv04-_f7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:twitch"} {...others} />);
}

export default Component;
