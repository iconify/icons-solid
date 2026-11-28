import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nn0-deb2k.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/el1390byg.css';
import '../../css/e/ehrxwkb6w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nn0-deb2k secondary"/><g class="dt0cm9dhy primary"><path class="el1390byg"/><path class="ehrxwkb6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bone-fractured-duo"} {...others} />);
}

export default Component;
