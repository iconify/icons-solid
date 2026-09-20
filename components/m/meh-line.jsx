import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxeo2gbab.css';
import '../../css/q/q8921-8vp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nxeo2gbab"/><path class="q8921-8vp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:meh-line"} {...others} />);
}

export default Component;
