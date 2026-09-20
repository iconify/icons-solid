import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mgl5hxt6h.css';
import '../../css/y/ydy6yt3gh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mgl5hxt6h"/><path class="ydy6yt3gh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:mail-dot-fill"} {...others} />);
}

export default Component;
