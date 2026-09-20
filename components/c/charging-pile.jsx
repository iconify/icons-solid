import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j54vq3xxo.css';
import '../../css/b/bvuu-21tz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j54vq3xxo"/><path class="bvuu-21tz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:charging-pile"} {...others} />);
}

export default Component;
