import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/s/szel5gblr.css';
import '../../css/t/t4s2asznb.css';
import '../../css/g/gb-hbngty.css';
import '../../css/f/fiu-ndpeh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="szel5gblr"/><path class="t4s2asznb"/><path class="gb-hbngty"/><path class="fiu-ndpeh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:medical-folder"} {...others} />);
}

export default Component;
