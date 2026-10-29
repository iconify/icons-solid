import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iuy1aab-e.css';
import '../../css/k/keh7f8wkw.css';
import '../../css/i/ikwvq7b1d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iuy1aab-e wm-k"/><path class="keh7f8wkw wm-a"/><path class="ikwvq7b1d wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:shopping-cart"} {...others} />);
}

export default Component;
