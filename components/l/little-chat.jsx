import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/otn30pbbb.css';
import '../../css/b/bezz-3_ya.css';
import '../../css/v/v-xbbnb7c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="otn30pbbb"/><path class="bezz-3_ya"/><path class="v-xbbnb7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:little-chat"} {...others} />);
}

export default Component;
