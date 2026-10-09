import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbw4lkb5b.css';
import '../../css/o/o45kaobgy.css';
import '../../css/q/q38qvzq1q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kbw4lkb5b"/><path class="o45kaobgy"/><path class="q38qvzq1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gauge-20-bold"} {...others} />);
}

export default Component;
