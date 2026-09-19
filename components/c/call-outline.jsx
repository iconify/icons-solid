import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bj4wi1bgc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bj4wi1bgc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:call-outline"} {...others} />);
}

export default Component;
