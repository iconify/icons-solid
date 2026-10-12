import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/supw_uxls.css';
import '../../css/a/a_g1h2blr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="supw_uxls"/><path clip-rule="evenodd" class="a_g1h2blr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:shield-cog-corner-filled"} {...others} />);
}

export default Component;
