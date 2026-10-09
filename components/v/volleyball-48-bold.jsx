import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2neunb3u.css';
import '../../css/w/wsyfe-e9b.css';
import '../../css/e/e87twg6ap.css';
import '../../css/t/t0jh0bbtf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n2neunb3u"/><path class="wsyfe-e9b"/><path class="e87twg6ap"/><path class="t0jh0bbtf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:volleyball-48-bold"} {...others} />);
}

export default Component;
