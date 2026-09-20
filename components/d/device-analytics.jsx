import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x3rlb1bhp.css';
import '../../css/w/w_h69fh2g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x3rlb1bhp"/><path class="w_h69fh2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-analytics"} {...others} />);
}

export default Component;
