import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xk5ypzb3z.css';
import '../../css/h/h6_1hfvax.css';
import '../../css/r/rnnsb1bql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wm-a xk5ypzb3z"/><path class="h6_1hfvax"/><path class="rnnsb1bql wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cupid-bow-duo"} {...others} />);
}

export default Component;
