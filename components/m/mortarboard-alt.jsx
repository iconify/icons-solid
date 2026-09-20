import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nwindnbjv.css';
import '../../css/t/tajxpcbfy.css';
import '../../css/b/bdaj99b_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nwindnbjv"/><path class="tajxpcbfy"/><path class="bdaj99b_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:mortarboard-alt"} {...others} />);
}

export default Component;
