import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mjghdyp0j.css';
import '../../css/j/jsu9-_e7s.css';
import '../../css/c/ctzk1l0kn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mjghdyp0j"/><path class="jsu9-_e7s"/><path class="ctzk1l0kn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:file-report"} {...others} />);
}

export default Component;
