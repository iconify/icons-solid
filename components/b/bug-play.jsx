import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c7bvh2b5b.css';
import '../../css/p/pcr5k932f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c7bvh2b5b"/><path class="pcr5k932f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:bug-play"} {...others} />);
}

export default Component;
