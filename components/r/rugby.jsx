import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gj0fl5l1e.css';
import '../../css/i/i9tiws8jb.css';
import '../../css/x/xegzkobzu.css';
import '../../css/v/v4qas0osi.css';
import '../../css/g/g8hhtl19r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gj0fl5l1e"/><rect class="i9tiws8jb"/><path class="xegzkobzu"/><rect class="v4qas0osi"/><path class="g8hhtl19r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:rugby"} {...others} />);
}

export default Component;
