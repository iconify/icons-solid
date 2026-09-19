import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v5vp10bfi.css';
import '../../css/k/k1vbm5bqx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer v5vp10bfi"/><path class="duoicon-primary-layer k1vbm5bqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:calendar"} {...others} />);
}

export default Component;
