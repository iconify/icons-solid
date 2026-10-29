import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gu2lc6dik.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/e/e__sjky1u.css';
import '../../css/r/r42p5ngeg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="gu2lc6dik"/><path class="d3y9mw6db"/><path class="e__sjky1u wm-a"/><path class="r42p5ngeg wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-woman-hijab"} {...others} />);
}

export default Component;
