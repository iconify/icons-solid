import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc96p9j4t.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="bc96p9j4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:azuredatafactory"} {...others} />);
}

export default Component;
