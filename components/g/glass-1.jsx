import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lsv3emysi.css';
import '../../css/l/lrloqybnl.css';
import '../../css/w/wcftsnbie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lsv3emysi"/><path class="lrloqybnl"/><path class="wcftsnbie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:glass-1"} {...others} />);
}

export default Component;
