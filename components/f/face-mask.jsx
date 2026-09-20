import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jzwluwbtq.css';
import '../../css/r/r8riecbhi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jzwluwbtq"/><path class="r8riecbhi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:face-mask"} {...others} />);
}

export default Component;
