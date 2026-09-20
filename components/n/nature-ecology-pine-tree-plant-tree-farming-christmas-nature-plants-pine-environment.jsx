import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ckf9o2mjh.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ckf9o2mjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:nature-ecology-pine-tree-plant-tree-farming-christmas-nature-plants-pine-environment"} {...others} />);
}

export default Component;
