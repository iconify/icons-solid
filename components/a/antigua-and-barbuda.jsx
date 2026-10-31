import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lh2693boa.css';
import '../../css/f/fi8uxkbev.css';
import '../../css/w/w2vxx8m4b.css';
import '../../css/h/hbqk-zhur.css';
import '../../css/p/pwu498b-u.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="lh2693boa"/><path class="fi8uxkbev"/><path class="w2vxx8m4b"/><path class="hbqk-zhur"/><path class="pwu498b-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:antigua-and-barbuda"} {...others} />);
}

export default Component;
