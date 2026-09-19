import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6ovpccxr.css';
import '../../css/q/qume8ab4m.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="p6ovpccxr"/><path class="qume8ab4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-information-empty"} {...others} />);
}

export default Component;
