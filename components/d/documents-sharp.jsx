import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lyexnnu5k.css';
import '../../css/r/rug9-jejd.css';
import '../../css/c/cm5ecor1p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lyexnnu5k"/><path class="rug9-jejd"/><path class="cm5ecor1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:documents-sharp"} {...others} />);
}

export default Component;
