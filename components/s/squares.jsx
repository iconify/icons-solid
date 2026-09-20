import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d-db3-m3r.css';
import '../../css/c/cyr29ulco.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d-db3-m3r"/><path class="cyr29ulco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:squares"} {...others} />);
}

export default Component;
