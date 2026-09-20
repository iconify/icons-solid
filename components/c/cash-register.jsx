import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jbuxa0enq.css';
import '../../css/a/asbvddb8h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jbuxa0enq"/><path class="asbvddb8h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cash-register"} {...others} />);
}

export default Component;
