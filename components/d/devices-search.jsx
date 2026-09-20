import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m-tz0bg8m.css';
import '../../css/j/jeld5j7ma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="m-tz0bg8m"/><path class="jeld5j7ma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:devices-search"} {...others} />);
}

export default Component;
