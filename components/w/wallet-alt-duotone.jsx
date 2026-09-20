import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_xqph0yx.css';
import '../../css/c/clz-rp4dm.css';
import '../../css/b/by7c5-bab.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z_xqph0yx"/><path class="clz-rp4dm"/><rect class="by7c5-bab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:wallet-alt-duotone"} {...others} />);
}

export default Component;
