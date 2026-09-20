import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i3q5r8bvb.css';
import '../../css/a/akueembfh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="i3q5r8bvb"/><path class="akueembfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-skype"} {...others} />);
}

export default Component;
