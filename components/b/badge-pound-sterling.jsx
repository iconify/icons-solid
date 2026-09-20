import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s5p5n7olm.css';
import '../../css/k/klnhtubet.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s5p5n7olm"/><path class="klnhtubet"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:badge-pound-sterling"} {...others} />);
}

export default Component;
