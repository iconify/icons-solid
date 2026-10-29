import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gorsochjg.css';
import '../../css/b/b0q5uxwll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="gorsochjg"/><path class="b0q5uxwll wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-pull-request-draft"} {...others} />);
}

export default Component;
