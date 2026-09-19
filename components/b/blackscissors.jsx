import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uaoxfqbbl.css';
import '../../css/f/fh4kjpb7i.css';
import '../../css/q/q4s8-jw3r.css';
import '../../css/r/rf907sb4j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uaoxfqbbl"/><path class="fh4kjpb7i"/><path class="q4s8-jw3r"/><path class="rf907sb4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:blackscissors"} {...others} />);
}

export default Component;
