import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zvtc_9i2b.css';
import '../../css/q/q3lw8vbat.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="zvtc_9i2b"/><path class="q3lw8vbat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:egg-fried"} {...others} />);
}

export default Component;
