import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qubl4sb6x.css';
import '../../css/j/jmefr5bvy.css';
import '../../css/z/z-qllkbth.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="qubl4sb6x"/><rect class="jmefr5bvy"/><path class="z-qllkbth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:binary"} {...others} />);
}

export default Component;
