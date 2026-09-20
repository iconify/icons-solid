import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/osy7eu3xp.css';
import '../../css/f/fbcg8rb-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="osy7eu3xp"/><path class="fbcg8rb-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:devices-code"} {...others} />);
}

export default Component;
