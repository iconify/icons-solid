import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lq48qtbtv.css';
import '../../css/l/ldnrvyb3m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lq48qtbtv"/><path class="ldnrvyb3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:fullscreen-exit-duotone"} {...others} />);
}

export default Component;
