import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2neunb3u.css';
import '../../css/z/z5n8juber.css';
import '../../css/z/zxkwv-2ro.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n2neunb3u"/><path class="z5n8juber"/><path class="zxkwv-2ro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:x-circle-48-bold"} {...others} />);
}

export default Component;
