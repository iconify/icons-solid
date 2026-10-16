import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p72eivapz.css';
import '../../css/t/tbo-rh1-d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p72eivapz"/><path class="tbo-rh1-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chainsaw-48-bold"} {...others} />);
}

export default Component;
