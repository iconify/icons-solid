import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n6l_j5b2f.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="n6l_j5b2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:ecto-wordmark"} {...others} />);
}

export default Component;
