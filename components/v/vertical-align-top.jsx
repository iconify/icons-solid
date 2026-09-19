import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nql2phbly.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nql2phbly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:vertical-align-top"} {...others} />);
}

export default Component;
