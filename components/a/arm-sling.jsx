import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_oc2ubbn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a_oc2ubbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:arm-sling"} {...others} />);
}

export default Component;
