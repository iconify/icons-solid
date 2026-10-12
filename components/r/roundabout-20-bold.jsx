import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/atrt3foew.css';
import '../../css/b/buekbtbtt.css';
import '../../css/n/nqrv9soyo.css';
import '../../css/f/f3h68lbpw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="atrt3foew"/><path class="buekbtbtt"/><path class="nqrv9soyo"/><path class="f3h68lbpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:roundabout-20-bold"} {...others} />);
}

export default Component;
