import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7k8fqbml.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="c7k8fqbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:link-horizontal"} {...others} />);
}

export default Component;
