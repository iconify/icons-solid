import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wbkdetb-c.css';
import '../../css/k/kwm-i6kdf.css';
import '../../css/p/p1ezbcjat.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wbkdetb-c"/><path class="kwm-i6kdf"/><path class="p1ezbcjat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:wristwatch"} {...others} />);
}

export default Component;
