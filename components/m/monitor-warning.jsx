import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mokjock6u.css';
import '../../css/y/ydozd7bwp.css';
import '../../css/p/p-jm95b3r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="mokjock6u"/><path class="ydozd7bwp"/><path class="p-jm95b3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:monitor-warning"} {...others} />);
}

export default Component;
