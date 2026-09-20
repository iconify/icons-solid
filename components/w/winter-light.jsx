import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/ons53cb4g.css';
import '../../css/v/v__bi6tvw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><circle class="ons53cb4g"/><path class="v__bi6tvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:winter-light"} {...others} />);
}

export default Component;
