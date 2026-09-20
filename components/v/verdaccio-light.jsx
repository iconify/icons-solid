import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ac-mt5boh.css';
import '../../css/v/vxr1g-bus.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ac-mt5boh"/><path class="vxr1g-bus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:verdaccio-light"} {...others} />);
}

export default Component;
