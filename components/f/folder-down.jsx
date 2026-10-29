import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwk95ebax.css';
import '../../css/m/m4-harbow.css';
import '../../css/v/v--39qgbw.css';
import '../../css/n/nn_6kmorh.css';
import '../../css/x/xd6ojco4u.css';
import '../../css/h/hyu9n4bfx.css';
import '../../css/t/t2q-wu2sy.css';
import '../../css/e/ec47zebbj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow wwk95ebax"/><path class="m4-harbow wm-k"/><path class="v--39qgbw wm-k"/><path class="nn_6kmorh wm-k"/><path class="wm-k xd6ojco4u"/><path class="hyu9n4bfx wm-k"/><path class="t2q-wu2sy wm-shine"/><path class="ec47zebbj wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:folder-down"} {...others} />);
}

export default Component;
