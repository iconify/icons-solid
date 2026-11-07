import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gry2dppuz.css';
import '../../css/l/lm1gwl2sk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gry2dppuz"/><path class="lm1gwl2sk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shield-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
