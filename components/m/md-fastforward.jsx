import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xlxz3cbfv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xlxz3cbfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-fastforward"} {...others} />);
}

export default Component;
