import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/p/p8maj_bay.css';
import '../../css/l/lque48_fa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="p8maj_bay"/><path class="lque48_fa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:dashboard-gauge-2"} {...others} />);
}

export default Component;
