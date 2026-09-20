import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kigccwb1y.css';
import '../../css/p/plk5hxblf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kigccwb1y"/><path class="plk5hxblf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:clock-edit"} {...others} />);
}

export default Component;
