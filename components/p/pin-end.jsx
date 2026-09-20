import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m4y4qem6s.css';
import '../../css/m/ms2lmpowa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="m4y4qem6s"/><path class="ms2lmpowa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:pin-end"} {...others} />);
}

export default Component;
