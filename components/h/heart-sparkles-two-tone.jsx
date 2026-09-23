import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h0dfs-b6d.css';
import '../../css/m/m0fjq6bji.css';
import '../../css/t/tyn_20b6i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h0dfs-b6d"/><path class="m0fjq6bji"/><path class="tyn_20b6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:heart-sparkles-two-tone"} {...others} />);
}

export default Component;
