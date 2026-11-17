import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mmta-hb1g.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/i/idbbthb2f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mmta-hb1g"/><circle class="shu3xdl9q"/><circle class="idbbthb2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:circle-person-arms-spread"} {...others} />);
}

export default Component;
