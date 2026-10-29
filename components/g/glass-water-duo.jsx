import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gibh68n7x.css';
import '../../css/s/s2uhgxbuo.css';
import '../../css/e/em4t9mizl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="gibh68n7x"/><path class="s2uhgxbuo wm-a"/><path class="em4t9mizl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:glass-water-duo"} {...others} />);
}

export default Component;
