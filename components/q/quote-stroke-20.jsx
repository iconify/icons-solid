import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2qr6x11y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n2qr6x11y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:quote-stroke-20"} {...others} />);
}

export default Component;
