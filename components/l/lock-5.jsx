import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/psjfvob5q.css';
import '../../css/m/mm55jdb-v.css';
import '../../css/u/u888owovk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="psjfvob5q"/><path class="mm55jdb-v"/><path class="u888owovk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:lock-5"} {...others} />);
}

export default Component;
