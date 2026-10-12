import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x602xkb4n.css';
import '../../css/z/zlmwnvn6a.css';
import '../../css/o/ovqogpylh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x602xkb4n"/><path class="zlmwnvn6a"/><path class="ovqogpylh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bomb-duotone"} {...others} />);
}

export default Component;
