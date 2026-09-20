import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7ruo7b3n.css';
import '../../css/z/zpnwaj4vm.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a7ruo7b3n"/><path class="zpnwaj4vm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:business-products-safe"} {...others} />);
}

export default Component;
