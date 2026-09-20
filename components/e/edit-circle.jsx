import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gdpze30-q.css';
import '../../css/r/r3wa-kbzc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gdpze30-q"/><path class="r3wa-kbzc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:edit-circle"} {...others} />);
}

export default Component;
