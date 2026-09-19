import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a87ho47qt.css';
import '../../css/v/vst-zynlr.css';
import '../../css/o/oj9nw4-tl.css';
import '../../css/t/tkyzv7u3m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a87ho47qt"/><path class="vst-zynlr"/><path class="oj9nw4-tl"/><path class="tkyzv7u3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:network-security"} {...others} />);
}

export default Component;
