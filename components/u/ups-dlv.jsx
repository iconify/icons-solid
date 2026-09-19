import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_lxb5bxu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w_lxb5bxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:ups-dlv"} {...others} />);
}

export default Component;
