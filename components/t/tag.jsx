import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ay-6ct32d.css';
import '../../css/s/susx8mqow.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ay-6ct32d"/><path class="susx8mqow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:tag"} {...others} />);
}

export default Component;
