import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajy_v4bwf.css';
import '../../css/h/h9vo8yb_e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ajy_v4bwf"/><path clip-rule="evenodd" class="h9vo8yb_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:speaker-minimalistic-bold"} {...others} />);
}

export default Component;
