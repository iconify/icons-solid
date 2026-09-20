import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fld7_tbeg.css';
import '../../css/s/sk8y3_b-c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fld7_tbeg"/><path class="sk8y3_b-c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:ghost-2"} {...others} />);
}

export default Component;
