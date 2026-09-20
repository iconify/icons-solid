import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/h0f6r6bye.css';
import '../../css/c/c8km_cwfm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="h0f6r6bye"/><path class="c8km_cwfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:share-sharp-duotone"} {...others} />);
}

export default Component;
