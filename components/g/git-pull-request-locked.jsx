import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pj2w0xbfe.css';
import '../../css/q/q-784mrbe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pj2w0xbfe"/><path class="q-784mrbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:git-pull-request-locked"} {...others} />);
}

export default Component;
