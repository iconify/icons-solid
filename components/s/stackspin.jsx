import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mf-ixubsz.css';
import '../../css/r/r8xkjtbka.css';
import '../../css/p/pnqtkcbha.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mf-ixubsz"/><path class="r8xkjtbka"/><path class="pnqtkcbha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:stackspin"} {...others} />);
}

export default Component;
