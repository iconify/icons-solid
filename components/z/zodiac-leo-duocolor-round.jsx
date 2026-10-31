import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b259x8beh.css';
import '../../css/w/w-5mz7bdz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b259x8beh"/><path class="w-5mz7bdz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:zodiac-leo-duocolor-round"} {...others} />);
}

export default Component;
