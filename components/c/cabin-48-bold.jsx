import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_tc1dbfe.css';
import '../../css/i/i1-70q6sv.css';
import '../../css/k/k1qkci9od.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s_tc1dbfe"/><path class="i1-70q6sv"/><path class="k1qkci9od"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cabin-48-bold"} {...others} />);
}

export default Component;
