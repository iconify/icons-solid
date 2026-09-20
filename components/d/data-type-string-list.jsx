import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h134tzmmn.css';
import '../../css/d/dwpr0mcby.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="h134tzmmn"/><path class="dwpr0mcby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:data-type-string-list"} {...others} />);
}

export default Component;
