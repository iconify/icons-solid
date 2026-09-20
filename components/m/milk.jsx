import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gzhfo9bnw.css';
import '../../css/v/vz0g_7bep.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gzhfo9bnw"/><path class="vz0g_7bep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:milk"} {...others} />);
}

export default Component;
