import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z90mb8szc.css';
import '../../css/a/a6h6rcbwt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z90mb8szc"/><path class="a6h6rcbwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bathtub-20"} {...others} />);
}

export default Component;
