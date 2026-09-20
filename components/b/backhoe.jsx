import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vmulhkb1r.css';
import '../../css/w/w90_efw5n.css';
import '../../css/x/xmpslmb7r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vmulhkb1r"/><path class="w90_efw5n"/><path class="xmpslmb7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:backhoe"} {...others} />);
}

export default Component;
