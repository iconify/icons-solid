import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y5akcacqo.css';
import '../../css/f/fm7lf324t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y5akcacqo"/><path class="fm7lf324t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:target-2"} {...others} />);
}

export default Component;
