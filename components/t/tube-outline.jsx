import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yp5c0ubxx.css';
import '../../css/h/h5e9s-b1t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yp5c0ubxx"/><path clip-rule="evenodd" class="h5e9s-b1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:tube-outline"} {...others} />);
}

export default Component;
