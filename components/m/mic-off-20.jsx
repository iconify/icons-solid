import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_yax-h2e.css';
import '../../css/d/d8q64recs.css';
import '../../css/f/ft5pk3bco.css';
import '../../css/t/t13pyabps.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g_yax-h2e"/><path class="d8q64recs"/><path class="ft5pk3bco"/><path class="t13pyabps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mic-off-20"} {...others} />);
}

export default Component;
