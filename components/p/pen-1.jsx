import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nfgedbwjn.css';
import '../../css/v/vhrjor03s.css';
import '../../css/g/gsf7lhb-b.css';
import '../../css/f/f1d1j93_n.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="nfgedbwjn"/><path class="vhrjor03s"/><path class="gsf7lhb-b"/><path class="f1d1j93_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:pen-1"} {...others} />);
}

export default Component;
