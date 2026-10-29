import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/olgj5xbvl.css';
import '../../css/f/fmfz-mbie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="olgj5xbvl"/><path class="fmfz-mbie wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:zoom-out"} {...others} />);
}

export default Component;
