import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y199uvusw.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d6-xq1bxx.css';
import '../../css/d/d1ej-tbru.css';
import '../../css/f/flaug2yxl.css';
import '../../css/i/injexccye.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary y199uvusw"/><g class="dt0cm9dhy primary"><path class="d6-xq1bxx"/><path class="d1ej-tbru"/><path class="flaug2yxl"/><path class="injexccye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:radius-duo"} {...others} />);
}

export default Component;
