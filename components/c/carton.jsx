import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s50jjlb9t.css';
import '../../css/u/uevgwtb1s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s50jjlb9t"/><path class="uevgwtb1s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:carton"} {...others} />);
}

export default Component;
