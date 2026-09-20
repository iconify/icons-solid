import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wb86ohshj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wb86ohshj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:half-star-ltr"} {...others} />);
}

export default Component;
