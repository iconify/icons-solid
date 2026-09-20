import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ocf6zpbct.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ocf6zpbct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:heavy-six-point-asterisk-above-outstretched-hand"} {...others} />);
}

export default Component;
