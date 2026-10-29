import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qb8r96btl.css';
import '../../css/b/bry1z00iu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="qb8r96btl"/><path class="bry1z00iu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:list-ordered"} {...others} />);
}

export default Component;
