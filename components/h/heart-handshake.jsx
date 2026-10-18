import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o5kpsac4o.css';
import '../../css/i/i4yj31bdy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o5kpsac4o"/><path class="i4yj31bdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:heart-handshake"} {...others} />);
}

export default Component;
