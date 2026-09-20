import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mkil4xoxe.css';
import '../../css/k/kao9e10zu.css';
import '../../css/v/v_u95_e3w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mkil4xoxe"/><path class="kao9e10zu"/><path class="v_u95_e3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:wallet-duotone"} {...others} />);
}

export default Component;
