import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/elcz3zykd.css';
import '../../css/q/q_tt9nb9z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer elcz3zykd"/><path class="duoicon-primary-layer q_tt9nb9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:coin-stack"} {...others} />);
}

export default Component;
