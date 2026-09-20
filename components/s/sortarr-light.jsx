import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rcadwc-xf.css';
import '../../css/k/kdwpv2bov.css';
import '../../css/a/a-z8z7pww.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="rcadwc-xf"/><path class="kdwpv2bov"/><path class="a-z8z7pww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sortarr-light"} {...others} />);
}

export default Component;
