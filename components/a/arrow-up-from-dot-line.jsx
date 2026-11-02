import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mu2ac0b6r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mu2ac0b6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:arrow-up-from-dot-line"} {...others} />);
}

export default Component;
