import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lc46xob6r.css';
import '../../css/i/ilhwmcbcr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lc46xob6r"/><path class="ilhwmcbcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:direction-bear-right-01-filled"} {...others} />);
}

export default Component;
