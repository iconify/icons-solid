import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mi4vi9bad.css';
import '../../css/z/z7uhlob-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mi4vi9bad"/><path class="z7uhlob-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:flame-duocolor-round"} {...others} />);
}

export default Component;
