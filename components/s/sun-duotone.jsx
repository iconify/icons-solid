import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s52jt_b2a.css';
import '../../css/e/ez46996cd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s52jt_b2a"/><path class="ez46996cd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sun-duotone"} {...others} />);
}

export default Component;
