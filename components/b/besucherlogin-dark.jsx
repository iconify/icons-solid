import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ygf72t4qt.css';
import '../../css/o/o74utibot.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ygf72t4qt"/><rect class="o74utibot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:besucherlogin-dark"} {...others} />);
}

export default Component;
