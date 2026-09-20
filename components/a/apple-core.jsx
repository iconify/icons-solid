import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b1v_l-b3u.css';
import '../../css/f/ff6l7zjhi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b1v_l-b3u"/><path class="ff6l7zjhi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:apple-core"} {...others} />);
}

export default Component;
