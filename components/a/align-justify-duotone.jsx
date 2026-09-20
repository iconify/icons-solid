import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zvz-c3bhf.css';
import '../../css/x/x9b50xb7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zvz-c3bhf"/><path class="x9b50xb7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:align-justify-duotone"} {...others} />);
}

export default Component;
