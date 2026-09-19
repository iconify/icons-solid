import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvilx1q3c.css';
import '../../css/r/rlh241_ia.css';
import '../../css/n/n9yqn6mrh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="kvilx1q3c"><path class="rlh241_ia"/><path class="n9yqn6mrh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:renault"} {...others} />);
}

export default Component;
