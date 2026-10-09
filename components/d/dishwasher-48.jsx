import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smfo77bmv.css';
import '../../css/q/qq6_d0bdg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="smfo77bmv"/><path class="qq6_d0bdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dishwasher-48"} {...others} />);
}

export default Component;
