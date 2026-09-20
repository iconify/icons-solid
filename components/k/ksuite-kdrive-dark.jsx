import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p00s6tbuj.css';
import '../../css/f/fv_cpccws.css';
import '../../css/n/n3b691blg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p00s6tbuj"/><path class="fv_cpccws"/><path class="n3b691blg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-kdrive-dark"} {...others} />);
}

export default Component;
