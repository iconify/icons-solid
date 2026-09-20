import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/enxsd2b8y.css';
import '../../css/a/a3j-pfb9o.css';
import '../../css/o/ope8r9n2k.css';
import '../../css/x/xjfc-xbtr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="enxsd2b8y"/><path clip-rule="evenodd" class="a3j-pfb9o"/><path class="ope8r9n2k"/><path class="xjfc-xbtr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:user-circle-single"} {...others} />);
}

export default Component;
