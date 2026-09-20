import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/je9q5tbre.css';
import '../../css/f/fajy6kjai.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="je9q5tbre"/><path class="fajy6kjai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:package-sharp-two-tone"} {...others} />);
}

export default Component;
