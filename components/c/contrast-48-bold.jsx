import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2neunb3u.css';
import '../../css/t/t8l47cczo.css';
import '../../css/w/wlsh4tbrj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n2neunb3u"/><path class="t8l47cczo"/><path class="wlsh4tbrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:contrast-48-bold"} {...others} />);
}

export default Component;
