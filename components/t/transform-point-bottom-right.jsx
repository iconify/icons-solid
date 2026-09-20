import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ydmkld0ak.css';
import '../../css/v/v_8_foz3m.css';
import '../../css/f/femyu-bry.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ydmkld0ak"/><path class="v_8_foz3m"/><path class="femyu-bry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:transform-point-bottom-right"} {...others} />);
}

export default Component;
