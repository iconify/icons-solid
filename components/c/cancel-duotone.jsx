import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/o-0_jrb7m.css';
import '../../css/i/iqv0tptay.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><circle class="o-0_jrb7m"/><path class="iqv0tptay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:cancel-duotone"} {...others} />);
}

export default Component;
