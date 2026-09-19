import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6ovpccxr.css';
import '../../css/q/qume8ab4m.css';
import '../../css/i/itc5zdbai.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="p6ovpccxr"/><path class="qume8ab4m"/><g><path class="itc5zdbai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-information-outline"} {...others} />);
}

export default Component;
