import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lh4u3acyr.css';
import '../../css/l/l-_z1-nfk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lh4u3acyr"/><path class="l-_z1-nfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:tie-bow"} {...others} />);
}

export default Component;
