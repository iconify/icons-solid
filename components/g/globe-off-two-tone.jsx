import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dzzajs9ee.css';
import '../../css/t/tv3dr9bzz.css';
import '../../css/n/ndrwukb5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dzzajs9ee"/><path class="tv3dr9bzz"/><path class="ndrwukb5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:globe-off-two-tone"} {...others} />);
}

export default Component;
