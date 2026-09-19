import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3q2jqs8r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t3q2jqs8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:automatic-sas"} {...others} />);
}

export default Component;
