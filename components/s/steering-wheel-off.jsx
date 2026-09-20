import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/semujdb-t.css';
import '../../css/r/rcm53mbev.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="semujdb-t"/><path class="rcm53mbev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:steering-wheel-off"} {...others} />);
}

export default Component;
