import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hxj-1cpyy.css';
import '../../css/b/bhq-_uklw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hxj-1cpyy"/><path class="bhq-_uklw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:a-frame-20-bold"} {...others} />);
}

export default Component;
