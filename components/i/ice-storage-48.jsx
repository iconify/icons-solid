import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ie-wxdblp.css';
import '../../css/e/ewoso7beo.css';
import '../../css/w/wabkd6bsw.css';
import '../../css/j/jwu10ccso.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ie-wxdblp"/><path class="ewoso7beo"/><path class="wabkd6bsw"/><path class="jwu10ccso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ice-storage-48"} {...others} />);
}

export default Component;
