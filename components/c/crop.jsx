import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rrlausb-z.css';
import '../../css/g/g9w_9jwwo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rrlausb-z"/><path class="g9w_9jwwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:crop"} {...others} />);
}

export default Component;
