import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tl0opmb4g.css';
import '../../css/n/np97i6b2z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tl0opmb4g"/><path class="np97i6b2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:vault"} {...others} />);
}

export default Component;
