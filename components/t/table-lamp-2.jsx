import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/z/z5rkh944m.css';
import '../../css/p/puy6albkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="z5rkh944m"/><path class="puy6albkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:table-lamp-2"} {...others} />);
}

export default Component;
