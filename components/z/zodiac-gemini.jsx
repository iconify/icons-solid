import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p49j5yb8w.css';
import '../../css/r/raptmx4hw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p49j5yb8w"/><path class="raptmx4hw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:zodiac-gemini"} {...others} />);
}

export default Component;
