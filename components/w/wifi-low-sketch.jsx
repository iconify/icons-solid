import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x28pf5xcc.css';
import '../../css/w/w2c_87bft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="x28pf5xcc"/><path class="w2c_87bft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wifi-low-sketch"} {...others} />);
}

export default Component;
