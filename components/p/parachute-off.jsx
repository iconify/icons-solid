import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/szxi50beo.css';
import '../../css/v/v7215cbgo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="szxi50beo"/><path class="v7215cbgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:parachute-off"} {...others} />);
}

export default Component;
