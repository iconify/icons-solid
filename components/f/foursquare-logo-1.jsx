import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/t/tcqowceip.css';
import '../../css/x/xkt22hbiv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="tcqowceip"/><path class="xkt22hbiv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:foursquare-logo-1"} {...others} />);
}

export default Component;
