import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bjpg0ju9a.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bjpg0ju9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:hammerandscrewdriver"} {...others} />);
}

export default Component;
