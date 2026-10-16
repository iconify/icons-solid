import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxvm5wu2l.css';
import '../../css/c/c65-ehvfy.css';
import '../../css/y/yk3wkwcoj.css';
import '../../css/q/q8r5bs2wd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yxvm5wu2l"/><path class="c65-ehvfy"/><path class="yk3wkwcoj"/><path class="q8r5bs2wd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shed-48"} {...others} />);
}

export default Component;
