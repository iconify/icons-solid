import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t853eveaa.css';
import '../../css/r/r99fl0zcf.css';
import '../../css/u/uu81h1elk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t853eveaa"/><path class="r99fl0zcf"/><path class="uu81h1elk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:folder-network-duotone"} {...others} />);
}

export default Component;
