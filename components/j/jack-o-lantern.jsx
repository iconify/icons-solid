import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/i/iajb63bgy.css';
import '../../css/u/uj93cpddc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="iajb63bgy"/><path class="uj93cpddc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:jack-o-lantern"} {...others} />);
}

export default Component;
