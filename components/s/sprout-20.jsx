import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/db7nnwbjm.css';
import '../../css/j/jdfj84bsl.css';
import '../../css/k/ka2s7tbmc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="db7nnwbjm"/><path class="jdfj84bsl"/><path class="ka2s7tbmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sprout-20"} {...others} />);
}

export default Component;
