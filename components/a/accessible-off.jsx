import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w44nb-ric.css';
import '../../css/d/d4r6y_19q.css';
import '../../css/c/coej2_bhe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w44nb-ric"/><path class="d4r6y_19q"/><path class="coej2_bhe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:accessible-off"} {...others} />);
}

export default Component;
