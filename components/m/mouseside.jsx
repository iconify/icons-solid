import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2ae4oflk.css';
import '../../css/j/j0_e7b10j.css';
import '../../css/c/c7ynm7bfe.css';
import '../../css/g/gemjqib7p.css';
import '../../css/e/ete7mhz0y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e2ae4oflk"/><path class="j0_e7b10j"/><path class="c7ynm7bfe"/><path class="gemjqib7p"/><path class="ete7mhz0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:mouseside"} {...others} />);
}

export default Component;
