import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nb02gcc3k.css';
import '../../css/b/b9ttszcks.css';
import '../../css/k/kh4p7s4vc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nb02gcc3k"/><path class="b9ttszcks"/><path class="kh4p7s4vc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-jquery"} {...others} />);
}

export default Component;
