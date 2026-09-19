import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sgpc5ebjb.css';
import '../../css/r/r8_pblidm.css';
import '../../css/y/yp3yrlb6s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sgpc5ebjb"/><path class="r8_pblidm"/><path class="yp3yrlb6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:linksymbol"} {...others} />);
}

export default Component;
