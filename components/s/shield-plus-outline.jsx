import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw53yobjk.css';
import '../../css/q/qwjuf14gw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yw53yobjk"/><path clip-rule="evenodd" class="qwjuf14gw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shield-plus-outline"} {...others} />);
}

export default Component;
