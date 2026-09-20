import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cc-mb1skd.css';
import '../../css/i/i_z5bmbxi.css';
import '../../css/b/b_garkb1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cc-mb1skd"/><path class="i_z5bmbxi"/><path class="b_garkb1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:hat-baseball"} {...others} />);
}

export default Component;
