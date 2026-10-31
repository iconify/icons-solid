import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vq0y6rv0t.css';
import '../../css/j/ju6ln2bjw.css';
import '../../css/s/sah522b5e.css';
import '../../css/k/krkjhqbxc.css';
import '../../css/q/qr7g99buu.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="vq0y6rv0t"/><path class="ju6ln2bjw"/><path class="sah522b5e"/><path class="krkjhqbxc"/><path class="qr7g99buu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:fish"} {...others} />);
}

export default Component;
