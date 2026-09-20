import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/agn34nbcl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="agn34nbcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:speakap"} {...others} />);
}

export default Component;
