import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tlhbmhath.css';
import '../../css/o/oh_bc-b9h.css';
import '../../css/p/phgew-92f.css';
import '../../css/b/b4mz9pbbf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="tlhbmhath"/><path class="oh_bc-b9h wm-k"/><path class="phgew-92f wm-k"/><path class="b4mz9pbbf wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-star-sketch"} {...others} />);
}

export default Component;
