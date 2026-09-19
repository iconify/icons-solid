import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tquyp2c9p.css';
import '../../css/f/fd9f55byh.css';
import '../../css/c/cui1j9-yi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tquyp2c9p"/><path class="fd9f55byh"/><path class="cui1j9-yi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:cast"} {...others} />);
}

export default Component;
