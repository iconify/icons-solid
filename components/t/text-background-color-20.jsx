import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqm9qnbgq.css';
import '../../css/u/u5ujo24lt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wqm9qnbgq"/><path class="u5ujo24lt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:text-background-color-20"} {...others} />);
}

export default Component;
