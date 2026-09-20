import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l1y52pbaz.css';
import '../../css/c/c1v4znb8o.css';
import '../../css/t/tyo0b5boh.css';
import '../../css/g/gph1hfimc.css';
import '../../css/p/p9lkp8scw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l1y52pbaz"/><path class="c1v4znb8o"/><path class="tyo0b5boh"/><path class="gph1hfimc"/><path class="p9lkp8scw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:medical-specialty-pregnancy"} {...others} />);
}

export default Component;
