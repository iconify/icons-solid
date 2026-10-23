import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e6eatobym.css';
import '../../css/e/e2ek3ybdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e6eatobym"/><path class="e2ek3ybdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:circle-chevron-down"} {...others} />);
}

export default Component;
