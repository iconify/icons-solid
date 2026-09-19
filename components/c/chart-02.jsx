import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/it-o3tbsu.css';
import '../../css/u/uk6yj9byn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="it-o3tbsu"/><path class="uk6yj9byn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chart-02"} {...others} />);
}

export default Component;
