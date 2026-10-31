import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/e3zc47bax.css';
import '../../css/o/o727glb2e.css';
import '../../css/h/hnchhcx2q.css';
import '../../css/y/y55iiobqm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="e3zc47bax wm-shadow"/><path class="o727glb2e wm-shadow"/><path class="hnchhcx2q"/><path class="y55iiobqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:crop"} {...others} />);
}

export default Component;
