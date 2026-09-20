import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yf502rnmg.css';
import '../../css/w/w_mf8jb5k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yf502rnmg"/><path class="w_mf8jb5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:emergency-flashers-line"} {...others} />);
}

export default Component;
