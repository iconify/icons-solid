import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkb8-1b0p.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/a/a6e-3_biw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gkb8-1b0p secondary"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="a6e-3_biw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:circle-number-8-duo"} {...others} />);
}

export default Component;
