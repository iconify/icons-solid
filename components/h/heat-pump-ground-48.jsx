import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0j8550vr.css';
import '../../css/b/bxkvxsbrr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s0j8550vr"/><path clip-rule="evenodd" class="bxkvxsbrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-pump-ground-48"} {...others} />);
}

export default Component;
