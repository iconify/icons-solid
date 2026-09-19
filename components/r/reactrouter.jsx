import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ac8s-6m3i.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ac8s-6m3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:reactrouter"} {...others} />);
}

export default Component;
