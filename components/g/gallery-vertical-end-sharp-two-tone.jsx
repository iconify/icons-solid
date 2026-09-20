import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/l9i0wwxkf.css';
import '../../css/o/ogwe2lb_t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="l9i0wwxkf"/><path class="ogwe2lb_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:gallery-vertical-end-sharp-two-tone"} {...others} />);
}

export default Component;
