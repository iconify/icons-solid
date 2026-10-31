import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ooyw8-y8g.css';
import '../../css/b/birm78b0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ooyw8-y8g"/><path class="birm78b0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shopping-bag-duocolor-round"} {...others} />);
}

export default Component;
