import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rmboa2b4m.css';
import '../../css/o/ooe9rly_k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rmboa2b4m"/><path class="ooe9rly_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mastodon-duocolor-round"} {...others} />);
}

export default Component;
