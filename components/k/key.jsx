import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/t/ttc2n_z4v.css';
import '../../css/o/oqjgl4bax.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="ttc2n_z4v"/><path class="oqjgl4bax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:key"} {...others} />);
}

export default Component;
