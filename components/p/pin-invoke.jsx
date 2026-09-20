import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/outfamjxg.css';
import '../../css/s/s67or1jiy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="outfamjxg"/><path class="s67or1jiy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:pin-invoke"} {...others} />);
}

export default Component;
