import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uspitw7xi.css';
import '../../css/h/h6dnwg9iw.css';
import '../../css/d/dxon-mtqm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="uspitw7xi"/><path class="h6dnwg9iw"/><path class="dxon-mtqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mirror-left-linear"} {...others} />);
}

export default Component;
