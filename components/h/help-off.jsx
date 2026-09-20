import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v3flcn71c.css';
import '../../css/c/c7wfq8fmp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v3flcn71c"/><path class="c7wfq8fmp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:help-off"} {...others} />);
}

export default Component;
