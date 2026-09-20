import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/azmk3ccdz.css';
import '../../css/y/y9e38dbof.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="azmk3ccdz"/><path class="y9e38dbof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-hbo"} {...others} />);
}

export default Component;
