import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ei_1tabmg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ei_1tabmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:grab"} {...others} />);
}

export default Component;
