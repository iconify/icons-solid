import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/temjivdtd.css';
import '../../css/e/e3yi-0i_w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="temjivdtd"/><path class="e3yi-0i_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-personadd"} {...others} />);
}

export default Component;
