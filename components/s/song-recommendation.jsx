import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o66dwpwet.css';
import '../../css/b/bar1z4d_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="o66dwpwet"/><path class="bar1z4d_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:song-recommendation"} {...others} />);
}

export default Component;
