import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bcf_53btq.css';
import '../../css/v/vdv47vfaw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bcf_53btq"/><path class="vdv47vfaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:test-tube-fill"} {...others} />);
}

export default Component;
