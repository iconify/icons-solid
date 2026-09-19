import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmq2wcbyn.css';
import '../../css/h/hhgbemb5k.css';
import '../../css/l/lve-jub9n.css';
import '../../css/y/yw0gu7yyd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rmq2wcbyn"/><path class="hhgbemb5k"/><path class="lve-jub9n"/><path class="yw0gu7yyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:soup-can-outline"} {...others} />);
}

export default Component;
