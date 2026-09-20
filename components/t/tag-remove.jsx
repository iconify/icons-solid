import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fz5zvs8hu.css';
import '../../css/q/qqd875bhp.css';
import '../../css/o/orj139bgi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fz5zvs8hu"/><circle transform="rotate(-45 8.658 6.738)" class="qqd875bhp"/><path class="orj139bgi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:tag-remove"} {...others} />);
}

export default Component;
