import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gysr-mb2g.css';
import '../../css/c/cnwa92bez.css';
import '../../css/l/l1i-32b5o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gysr-mb2g"/><path class="cnwa92bez"/><path class="l1i-32b5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chassis-ground-48-bold"} {...others} />);
}

export default Component;
