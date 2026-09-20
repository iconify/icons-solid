import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jon1cz6hx.css';
import '../../css/l/lv3b0kbuz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jon1cz6hx"/><path class="lv3b0kbuz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:uber"} {...others} />);
}

export default Component;
