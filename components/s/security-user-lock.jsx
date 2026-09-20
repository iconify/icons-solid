import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w7zflcgyt.css';
import '../../css/b/bvr4std4t.css';
import '../../css/t/twjjy2bks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w7zflcgyt"/><path class="bvr4std4t"/><path class="twjjy2bks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:security-user-lock"} {...others} />);
}

export default Component;
