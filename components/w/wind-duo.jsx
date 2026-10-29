import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gkf7pdbgi.css';
import '../../css/v/v335rzk7y.css';
import '../../css/a/aaskxzbtv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="gkf7pdbgi wm-a"/><path class="v335rzk7y"/><path class="aaskxzbtv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wind-duo"} {...others} />);
}

export default Component;
