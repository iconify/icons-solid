import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv_brepse.css';
import '../../css/h/h_z_3w4_i.css';
import '../../css/a/aj0h0o7yi.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="yv_brepse"/><path class="h_z_3w4_i"/><path class="aj0h0o7yi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:clock-circle-twotone"} {...others} />);
}

export default Component;
