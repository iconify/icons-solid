import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/p/pxsesr7sk.css';
import '../../css/p/pbhozkgnf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="pxsesr7sk"/><path class="pbhozkgnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:shield-2"} {...others} />);
}

export default Component;
