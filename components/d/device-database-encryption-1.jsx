import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/y/y4ez66bxl.css';
import '../../css/m/mz463gbyk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="y4ez66bxl"/><path class="mz463gbyk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:device-database-encryption-1"} {...others} />);
}

export default Component;
