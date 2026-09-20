import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sj3q2nb3r.css';
import '../../css/p/p_9eu4b7x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sj3q2nb3r"/><path class="p_9eu4b7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:mail-x-fill"} {...others} />);
}

export default Component;
