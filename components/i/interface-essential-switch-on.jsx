import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ur6-9ubuj.css';
import '../../css/b/bcj78jz_c.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ur6-9ubuj"/><path class="bcj78jz_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-switch-on"} {...others} />);
}

export default Component;
