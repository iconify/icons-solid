import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ce7iukbuh.css';
import '../../css/e/e-fk_vb4b.css';
import '../../css/j/ji3kd-bgh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ce7iukbuh"/><path class="e-fk_vb4b"/><path clip-rule="evenodd" class="ji3kd-bgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:image-scan"} {...others} />);
}

export default Component;
