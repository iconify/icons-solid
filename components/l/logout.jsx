import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n_z032b1f.css';
import '../../css/c/cv41br6ua.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n_z032b1f"/><path class="cv41br6ua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:logout"} {...others} />);
}

export default Component;
