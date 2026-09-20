import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ap-wpqeyt.css';
import '../../css/d/dl8vi153m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ap-wpqeyt"/><path class="dl8vi153m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:pig-head"} {...others} />);
}

export default Component;
