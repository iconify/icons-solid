import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ez9s18yps.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ez9s18yps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:pricing-traditional"} {...others} />);
}

export default Component;
