import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9xn_wl3y.css';
import '../../css/z/z7jcrbb9a.css';
import '../../css/z/zf9c-5_5w.css';
import '../../css/l/l87qshb9i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l9xn_wl3y"/><path class="z7jcrbb9a"/><path class="zf9c-5_5w"/><path class="l87qshb9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-cycle-20-bold"} {...others} />);
}

export default Component;
