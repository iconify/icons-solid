import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oa_z615av.css';
import '../../css/v/vjh719bwy.css';
import '../../css/r/r-pqz712x.css';
import '../../css/z/zvmd8r99d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oa_z615av"/><path class="vjh719bwy"/><path class="r-pqz712x"/><path class="zvmd8r99d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:paint-bucket-1"} {...others} />);
}

export default Component;
