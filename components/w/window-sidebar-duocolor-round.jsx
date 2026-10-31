import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a15u2ub2w.css';
import '../../css/w/w-y_52bbf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a15u2ub2w"/><path class="w-y_52bbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:window-sidebar-duocolor-round"} {...others} />);
}

export default Component;
