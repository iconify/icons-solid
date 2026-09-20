import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ob-w2dutz.css';
import '../../css/f/fj1_0-bcn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ob-w2dutz"/><path class="fj1_0-bcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cpu-off"} {...others} />);
}

export default Component;
