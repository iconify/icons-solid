import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yybeh6b4o.css';
import '../../css/r/rc1rp4d6j.css';
import '../../css/h/h2w2gxl4v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yybeh6b4o"/><path class="rc1rp4d6j"/><path class="h2w2gxl4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gravity-base-48-bold"} {...others} />);
}

export default Component;
