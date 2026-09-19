import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k72q-yb3f.css';
import '../../css/d/dd34srmzm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k72q-yb3f"/><path class="dd34srmzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:golf-alt"} {...others} />);
}

export default Component;
