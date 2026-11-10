import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvacbpvba.css';
import '../../css/s/stjoir3xn.css';
import '../../css/o/ocgdtyvan.css';
import '../../css/t/tv-kmvola.css';
import '../../css/q/qylfpj-0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xvacbpvba"/><path class="stjoir3xn"/><path class="ocgdtyvan"/><path class="tv-kmvola"/><path class="qylfpj-0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:robot-off"} {...others} />);
}

export default Component;
