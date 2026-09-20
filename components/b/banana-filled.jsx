import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzjb0rqzb.css';
import '../../css/m/m99ygkb_k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zzjb0rqzb"/><path class="m99ygkb_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:banana-filled"} {...others} />);
}

export default Component;
