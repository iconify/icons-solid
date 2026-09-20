import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/irlw9pb5t.css';
import '../../css/q/qj8iipbgi.css';
import '../../css/g/gluuty0cs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="irlw9pb5t"/><path class="qj8iipbgi"/><path clip-rule="evenodd" class="gluuty0cs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:unlock-duotone"} {...others} />);
}

export default Component;
