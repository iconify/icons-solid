import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/skq7rbv_x.css';
import '../../css/y/y5d1eqbox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="skq7rbv_x"/><path class="y5d1eqbox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:alarm"} {...others} />);
}

export default Component;
