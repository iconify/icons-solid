import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/caexggh5f.css';
import '../../css/o/o_tmdovfv.css';
import '../../css/z/zsgh3xw_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="caexggh5f"/><path class="o_tmdovfv"/><path class="zsgh3xw_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:microprocessor-computer-chip-overheat"} {...others} />);
}

export default Component;
