import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/juhiwzb6y.css';
import '../../css/e/efqpt7b2h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="juhiwzb6y"/><path class="efqpt7b2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:brick-wall-fire"} {...others} />);
}

export default Component;
