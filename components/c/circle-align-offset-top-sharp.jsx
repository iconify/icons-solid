import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/by26kkbis.css';
import '../../css/s/s63qubk_z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="by26kkbis"/><path class="s63qubk_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-align-offset-top-sharp"} {...others} />);
}

export default Component;
