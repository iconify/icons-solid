import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r2yhsqbio.css';
import '../../css/h/hzc2ribmh.css';
import '../../css/d/dbh9lwxiy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="r2yhsqbio"/><path class="hzc2ribmh"/><path class="dbh9lwxiy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:subtitles-sparkle"} {...others} />);
}

export default Component;
