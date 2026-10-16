import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zewwvmbhq.css';
import '../../css/w/w65ibub9r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zewwvmbhq"/><path class="w65ibub9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:paper-mill-20-bold"} {...others} />);
}

export default Component;
