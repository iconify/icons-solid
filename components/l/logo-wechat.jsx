import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uqm469b_j.css';
import '../../css/m/mjpn8j_wb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uqm469b_j"/><path class="mjpn8j_wb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:logo-wechat"} {...others} />);
}

export default Component;
