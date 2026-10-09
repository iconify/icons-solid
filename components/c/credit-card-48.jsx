import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txant-bxm.css';
import '../../css/m/mc_31q86u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="txant-bxm"/><path class="mc_31q86u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:credit-card-48"} {...others} />);
}

export default Component;
