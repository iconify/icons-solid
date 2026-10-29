import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/icdm8abfp.css';
import '../../css/j/j8ihovbit.css';
import '../../css/t/tsvm_abrn.css';
import '../../css/i/ic1866bck.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="icdm8abfp wm-k"/><path class="j8ihovbit wm-a"/><path class="tsvm_abrn"/><path class="ic1866bck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-bunny"} {...others} />);
}

export default Component;
