import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcwudk0gy.css';
import '../../css/s/sn54l82wk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vcwudk0gy"/><path class="sn54l82wk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:go"} {...others} />);
}

export default Component;
