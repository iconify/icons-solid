import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mv2ndra2q.css';
import '../../css/m/mgbb3achs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mv2ndra2q"/><path class="mgbb3achs wm-deco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:moon"} {...others} />);
}

export default Component;
