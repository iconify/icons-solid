import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ahwfs1brb.css';
import '../../css/i/ixuensbem.css';
import '../../css/t/t964pl-hf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ahwfs1brb"/><path class="ixuensbem"/><path class="t964pl-hf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:route-off-two-tone"} {...others} />);
}

export default Component;
