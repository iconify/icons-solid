import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3zrdfbhz.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="w3zrdfbhz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:adobe-after-effects"} {...others} />);
}

export default Component;
