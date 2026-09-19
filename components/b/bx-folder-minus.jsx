import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m8u4nj3lr.css';
import '../../css/l/lv7a0p21m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m8u4nj3lr"/><path class="lv7a0p21m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-folder-minus"} {...others} />);
}

export default Component;
