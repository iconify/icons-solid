import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lxh_3bcls.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lxh_3bcls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:panorama-horizontal-filled"} {...others} />);
}

export default Component;
