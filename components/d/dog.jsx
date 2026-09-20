import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xuo56rhps.css';
import '../../css/x/x47-c9waf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xuo56rhps"/><path class="x47-c9waf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:dog"} {...others} />);
}

export default Component;
