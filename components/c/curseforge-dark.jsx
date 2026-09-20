import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iwj6fiudg.css';

const viewBox = {"width":260,"height":256};
const content = `<path class="iwj6fiudg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:curseforge-dark"} {...others} />);
}

export default Component;
