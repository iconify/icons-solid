import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_i598bje.css';
import '../../css/z/zevd0dbro.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w_i598bje"/><path class="zevd0dbro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:wechat"} {...others} />);
}

export default Component;
