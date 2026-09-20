import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/ptcyaub2w.css';
import '../../css/c/cry3dacik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="ptcyaub2w"/><path class="cry3dacik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:train"} {...others} />);
}

export default Component;
