import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fx610dbwq.css';
import '../../css/k/k32k4bbrk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fx610dbwq"/><path class="k32k4bbrk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:book-copy"} {...others} />);
}

export default Component;
