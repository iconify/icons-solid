import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zf7cd0p_c.css';
import '../../css/g/gluuty0cs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zf7cd0p_c"/><path clip-rule="evenodd" class="gluuty0cs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:unlock-fill"} {...others} />);
}

export default Component;
