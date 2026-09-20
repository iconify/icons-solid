import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/krf7npbdz.css';
import '../../css/m/m3scqya2g.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="krf7npbdz"/><path class="m3scqya2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:airplay-solid"} {...others} />);
}

export default Component;
