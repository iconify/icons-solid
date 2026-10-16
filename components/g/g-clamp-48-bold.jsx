import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uq3vaoc0u.css';
import '../../css/w/wdqcz8b5z.css';
import '../../css/q/q-jgudcfn.css';
import '../../css/r/rm4n9vb7c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uq3vaoc0u"/><path class="wdqcz8b5z"/><path class="q-jgudcfn"/><path class="rm4n9vb7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:g-clamp-48-bold"} {...others} />);
}

export default Component;
