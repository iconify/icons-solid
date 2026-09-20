import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gndl05mtq.css';
import '../../css/h/h5_88om8z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="gndl05mtq"/><path class="h5_88om8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:toy-brick"} {...others} />);
}

export default Component;
