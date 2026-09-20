import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/azgzbnbor.css';
import '../../css/u/ut-r7absq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="azgzbnbor"/><path class="ut-r7absq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:mug-teabag"} {...others} />);
}

export default Component;
