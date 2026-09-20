import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/l7u-4rb7i.css';
import '../../css/a/ah92i4n0h.css';
import '../../css/d/di3s11blc.css';
import '../../css/m/mu62w5buf.css';
import '../../css/q/qd8-7pq5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="l7u-4rb7i"/><path class="ah92i4n0h"/><path class="di3s11blc"/><path class="mu62w5buf"/><path class="qd8-7pq5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:hbo-max-logo"} {...others} />);
}

export default Component;
