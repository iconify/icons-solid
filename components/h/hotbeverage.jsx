import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzpan3bci.css';
import '../../css/o/ovgcn15iq.css';
import '../../css/k/kw6ok-jlw.css';
import '../../css/c/cforkdjpv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pzpan3bci"/><path class="ovgcn15iq"/><path class="kw6ok-jlw"/><path class="cforkdjpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:hotbeverage"} {...others} />);
}

export default Component;
