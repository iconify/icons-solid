import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nw-jh6bei.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nw-jh6bei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:arrow-thick-top"} {...others} />);
}

export default Component;
