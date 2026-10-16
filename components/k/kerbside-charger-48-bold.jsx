import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/brf4rlr5x.css';
import '../../css/n/nd0pwk2rn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="brf4rlr5x"/><path class="nd0pwk2rn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:kerbside-charger-48-bold"} {...others} />);
}

export default Component;
