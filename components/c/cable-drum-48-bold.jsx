import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2neunb3u.css';
import '../../css/w/wdaa5te7j.css';
import '../../css/h/hxg65dbdu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n2neunb3u"/><path class="wdaa5te7j"/><path class="hxg65dbdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cable-drum-48-bold"} {...others} />);
}

export default Component;
