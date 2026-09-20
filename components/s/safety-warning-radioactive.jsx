import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rt5pd106e.css';
import '../../css/s/sgqdzub3k.css';
import '../../css/x/x19qmcbwy.css';
import '../../css/z/zsu9edbiz.css';
import '../../css/d/drxckl2ab.css';
import '../../css/r/rw0s7ab-c.css';
import '../../css/w/wgi83z25x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rt5pd106e"/><path class="sgqdzub3k"/><path class="x19qmcbwy"/><path class="zsu9edbiz"/><path class="drxckl2ab"/><path class="rw0s7ab-c"/><path class="wgi83z25x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:safety-warning-radioactive"} {...others} />);
}

export default Component;
