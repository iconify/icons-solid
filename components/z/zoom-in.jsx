import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/om8qxl02a.css';
import '../../css/j/jrqqhb3az.css';
import '../../css/u/uj4ngxb8y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="om8qxl02a"/><path class="jrqqhb3az"/><path class="uj4ngxb8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:zoom-in"} {...others} />);
}

export default Component;
