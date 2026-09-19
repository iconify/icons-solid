import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fac77ybxs.css';
import '../../css/t/t8vk-tb8q.css';
import '../../css/d/dubtynb3x.css';
import '../../css/k/kjsap28da.css';
import '../../css/p/p8qxhujil.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fac77ybxs"/><path class="t8vk-tb8q"/><path class="dubtynb3x"/><path class="kjsap28da"/><path class="p8qxhujil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:foxgrin"} {...others} />);
}

export default Component;
