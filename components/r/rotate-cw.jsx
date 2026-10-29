import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wkwaezb_n.css';
import '../../css/o/oj7j_1bgn.css';
import '../../css/s/ss3h7jkmy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wkwaezb_n wm-shadow"/><path class="oj7j_1bgn wm-k"/><path class="ss3h7jkmy wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:rotate-cw"} {...others} />);
}

export default Component;
