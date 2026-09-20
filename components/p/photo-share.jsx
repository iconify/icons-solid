import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i3e-v7bvr.css';
import '../../css/i/ienut5b7e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="i3e-v7bvr"/><path class="ienut5b7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:photo-share"} {...others} />);
}

export default Component;
