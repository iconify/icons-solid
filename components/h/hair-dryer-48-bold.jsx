import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/ve7dckibf.css';
import '../../css/d/dl48ttr9l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ve7dckibf"/><path class="dl48ttr9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hair-dryer-48-bold"} {...others} />);
}

export default Component;
