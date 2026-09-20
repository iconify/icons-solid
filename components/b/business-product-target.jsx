import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fuq6hpc1o.css';
import '../../css/f/filz8l4-x.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fuq6hpc1o"/><path class="filz8l4-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:business-product-target"} {...others} />);
}

export default Component;
