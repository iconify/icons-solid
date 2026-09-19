import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxa_324eo.css';
import '../../css/s/s79t828hd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nxa_324eo"/><circle class="s79t828hd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:bd-1x1"} {...others} />);
}

export default Component;
