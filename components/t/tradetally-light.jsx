import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mkm74zqsg.css';
import '../../css/u/u7c96f_0y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mkm74zqsg"/><path class="u7c96f_0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tradetally-light"} {...others} />);
}

export default Component;
