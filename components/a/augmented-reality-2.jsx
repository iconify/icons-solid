import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ywusfwepd.css';
import '../../css/c/cm12huumn.css';
import '../../css/z/z597y8bfi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ywusfwepd"/><path class="cm12huumn"/><path class="z597y8bfi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:augmented-reality-2"} {...others} />);
}

export default Component;
