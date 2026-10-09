import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c65-ehvfy.css';
import '../../css/b/b4gf8bm5e.css';
import '../../css/r/r-xyaib8p.css';
import '../../css/x/xlwzcxeyk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c65-ehvfy"/><path class="b4gf8bm5e"/><path class="r-xyaib8p"/><path class="xlwzcxeyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:load-shifting-48"} {...others} />);
}

export default Component;
