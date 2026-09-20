import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/k/k0894acco.css';
import '../../css/g/g4fhcn7zq.css';
import '../../css/q/qpozp3bki.css';
import '../../css/m/mh4w4pbsw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="pr52f_b5y"><path class="k0894acco"/><path class="g4fhcn7zq"/><path class="qpozp3bki"/><path class="mh4w4pbsw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:gambling"} {...others} />);
}

export default Component;
