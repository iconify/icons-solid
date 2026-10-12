import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nmzcp8s6h.css';
import '../../css/p/pnxg1kyll.css';
import '../../css/w/whl5lnb3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nmzcp8s6h"/><path class="pnxg1kyll"/><path class="whl5lnb3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:door-closed-locked-duotone"} {...others} />);
}

export default Component;
