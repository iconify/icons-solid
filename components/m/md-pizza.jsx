import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/asrsfxb5s.css';
import '../../css/m/mepmou5ny.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="asrsfxb5s"/><path class="mepmou5ny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-pizza"} {...others} />);
}

export default Component;
