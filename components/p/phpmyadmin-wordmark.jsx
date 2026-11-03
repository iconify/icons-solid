import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1swtpa_j.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="r1swtpa_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:phpmyadmin-wordmark"} {...others} />);
}

export default Component;
