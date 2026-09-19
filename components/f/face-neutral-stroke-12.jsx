import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vyuyv9n9p.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="vyuyv9n9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:face-neutral-stroke-12"} {...others} />);
}

export default Component;
