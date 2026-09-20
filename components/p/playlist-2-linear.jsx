import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f-nfw68nc.css';
import '../../css/c/c4shklb7z.css';
import '../../css/n/n4i2wabxy.css';
import '../../css/p/pha2x9i_u.css';
import '../../css/r/rvg1ddc-m.css';
import '../../css/h/hi5e58bpt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="f-nfw68nc"/><path class="c4shklb7z"/><path class="n4i2wabxy"/><path class="pha2x9i_u"/><path class="rvg1ddc-m"/><path class="hi5e58bpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:playlist-2-linear"} {...others} />);
}

export default Component;
