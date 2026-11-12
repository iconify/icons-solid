import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7bwm5bym.css';
import '../../css/p/pwgbt_brp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p7bwm5bym"/><path class="pwgbt_brp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:heyform-light"} {...others} />);
}

export default Component;
