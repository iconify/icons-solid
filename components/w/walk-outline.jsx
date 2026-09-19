import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zw1hwcn4c.css';
import '../../css/u/u7peyabnc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zw1hwcn4c"/><circle class="u7peyabnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:walk-outline"} {...others} />);
}

export default Component;
