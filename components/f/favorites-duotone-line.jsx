import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mntno_erj.css';
import '../../css/d/df30_3c8i.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG5XOYXbSY"><g class="ft5dv1b6b"><path class="mntno_erj"/><path class="df30_3c8i"/></g></mask></defs><path mask="url(#SVG5XOYXbSY)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:favorites-duotone-line"} {...others} />);
}

export default Component;
