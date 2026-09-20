import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c74mi4b0x.css';
import '../../css/e/e-bnx6bbh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c74mi4b0x"/><path class="e-bnx6bbh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:microfrontends"} {...others} />);
}

export default Component;
