import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b08g4nbhr.css';
import '../../css/d/dkupicb5t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b08g4nbhr"/><path class="dkupicb5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chat-notification"} {...others} />);
}

export default Component;
