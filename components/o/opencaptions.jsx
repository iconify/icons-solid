import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ak3byoaiu.css';
import '../../css/q/qsjon_xqs.css';
import '../../css/e/es1i79bpz.css';
import '../../css/l/lbss1-iny.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="ak3byoaiu"/><rect class="qsjon_xqs"/><rect class="es1i79bpz"/><rect class="lbss1-iny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:opencaptions"} {...others} />);
}

export default Component;
