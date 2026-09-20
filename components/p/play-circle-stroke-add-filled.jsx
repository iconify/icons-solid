import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zz84-znwv.css';
import '../../css/l/lxe7e-j4d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zz84-znwv"/><path class="lxe7e-j4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:play-circle-stroke-add-filled"} {...others} />);
}

export default Component;
