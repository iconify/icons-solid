import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ciwswkowe.css';
import '../../css/v/vjvavue8r.css';
import '../../css/s/skzg4r-hk.css';
import '../../css/j/japfaw1an.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ciwswkowe"/><path class="vjvavue8r"/><path clip-rule="evenodd" class="skzg4r-hk"/><path clip-rule="evenodd" class="japfaw1an"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:pea-pod"} {...others} />);
}

export default Component;
