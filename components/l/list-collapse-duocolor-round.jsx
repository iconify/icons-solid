import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ye2-fvvej.css';
import '../../css/b/b2_xccbks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ye2-fvvej"/><path class="b2_xccbks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:list-collapse-duocolor-round"} {...others} />);
}

export default Component;
