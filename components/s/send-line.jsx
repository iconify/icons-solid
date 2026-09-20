import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kijpecbmw.css';
import '../../css/c/c-2glzb4h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kijpecbmw"/><path class="c-2glzb4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:send-line"} {...others} />);
}

export default Component;
