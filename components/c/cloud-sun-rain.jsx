import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m9-4k6y9w.css';
import '../../css/p/pf05l3ymp.css';
import '../../css/d/dkfws9ftw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="m9-4k6y9w"/><path class="pf05l3ymp wm-a"/><path class="dkfws9ftw wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-sun-rain"} {...others} />);
}

export default Component;
