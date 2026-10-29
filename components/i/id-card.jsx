import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hx66pva8x.css';
import '../../css/z/z0pbxopjv.css';
import '../../css/n/ntgg6relj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hx66pva8x wm-k"/><path class="wm-a z0pbxopjv"/><path class="ntgg6relj wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:id-card"} {...others} />);
}

export default Component;
