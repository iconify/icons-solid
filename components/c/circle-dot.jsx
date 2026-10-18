import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e6eatobym.css';
import '../../css/h/hm5c2097h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e6eatobym"/><path class="hm5c2097h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:circle-dot"} {...others} />);
}

export default Component;
