import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i242pgvho.css';
import '../../css/i/ijptld2hs.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="i242pgvho"/><path class="ijptld2hs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:junit"} {...others} />);
}

export default Component;
