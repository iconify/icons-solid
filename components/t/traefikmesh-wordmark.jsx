import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/is3vjhbys.css';
import '../../css/w/wgy-1_e7a.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="is3vjhbys"/><path class="wgy-1_e7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:traefikmesh-wordmark"} {...others} />);
}

export default Component;
