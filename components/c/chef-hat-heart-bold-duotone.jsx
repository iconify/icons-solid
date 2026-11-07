import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9udybb1v.css';
import '../../css/g/gv79s0s8x.css';
import '../../css/w/wjzx4sbsg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a9udybb1v"/><path class="gv79s0s8x"/><path class="wjzx4sbsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chef-hat-heart-bold-duotone"} {...others} />);
}

export default Component;
