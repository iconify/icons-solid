import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vniww6bxz.css';
import '../../css/q/qtu4m29vr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vniww6bxz"/><path clip-rule="evenodd" class="qtu4m29vr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:palette-outline"} {...others} />);
}

export default Component;
