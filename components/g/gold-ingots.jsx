import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/ixnuzvpff.css';
import '../../css/k/kl9k3o0sf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ixnuzvpff"/><path class="kl9k3o0sf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:gold-ingots"} {...others} />);
}

export default Component;
