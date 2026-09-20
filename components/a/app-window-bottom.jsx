import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h38z5cbna.css';
import '../../css/d/dzlyfu30q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h38z5cbna"/><path class="dzlyfu30q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:app-window-bottom"} {...others} />);
}

export default Component;
