import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/li_ohhb9c.css';
import '../../css/s/smrvksb-z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="li_ohhb9c"/><path class="smrvksb-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-merge-alt-left"} {...others} />);
}

export default Component;
