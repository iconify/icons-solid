import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ir99-x1wr.css';
import '../../css/w/wlptt3buz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ir99-x1wr"/><path class="wlptt3buz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:ladle"} {...others} />);
}

export default Component;
