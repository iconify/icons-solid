import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nvog0ac-c.css';
import '../../css/f/fojz1b72c.css';
import '../../css/h/ha2_ye_sq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nvog0ac-c"/><path class="fojz1b72c"/><path class="ha2_ye_sq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:wheat"} {...others} />);
}

export default Component;
