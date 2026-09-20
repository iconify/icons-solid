import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f0e_weu-e.css';
import '../../css/n/ndmjvr_ms.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f0e_weu-e"/><path class="ndmjvr_ms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:circle-arrow-up-left"} {...others} />);
}

export default Component;
