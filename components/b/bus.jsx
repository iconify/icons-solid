import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bvz1iblsh.css';
import '../../css/v/v7ctcbb2q.css';
import '../../css/k/k2h3tsbhj.css';
import '../../css/d/dv-h2sbhb.css';
import '../../css/k/ku6c-5bvi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="bvz1iblsh wm-shadow"/><path class="v7ctcbb2q wm-shadow"/><path class="k2h3tsbhj"/><path class="dv-h2sbhb"/><path class="ku6c-5bvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:bus"} {...others} />);
}

export default Component;
