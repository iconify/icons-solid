import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oaky9cbmf.css';
import '../../css/j/jyw82vbqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oaky9cbmf"/><path class="jyw82vbqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:train-fill"} {...others} />);
}

export default Component;
