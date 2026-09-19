import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_t27sw-g.css';
import '../../css/x/x4c4cxb_e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t_t27sw-g"/><path class="x4c4cxb_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:lemon"} {...others} />);
}

export default Component;
