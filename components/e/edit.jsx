import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/prseex2ik.css';
import '../../css/z/zwf8nmbxx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="prseex2ik"/><path class="zwf8nmbxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:edit"} {...others} />);
}

export default Component;
