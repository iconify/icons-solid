import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rq-dtviiy.css';
import '../../css/u/ua1ar1baw.css';
import '../../css/t/t3294rb2m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rq-dtviiy"/><path class="ua1ar1baw"/><circle class="t3294rb2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:coins"} {...others} />);
}

export default Component;
