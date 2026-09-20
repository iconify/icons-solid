import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/njo2e-y0o.css';
import '../../css/t/tjvuacchn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="njo2e-y0o"/><path class="tjvuacchn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:question-fill"} {...others} />);
}

export default Component;
