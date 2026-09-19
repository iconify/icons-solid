import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtgxhbc5g.css';
import '../../css/u/uidnkmboz.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="vtgxhbc5g"/><path class="uidnkmboz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:cairo"} {...others} />);
}

export default Component;
