import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lcbq29yjm.css';
import '../../css/f/fv8cozbbr.css';
import '../../css/s/s3a7m4bzs.css';
import '../../css/q/q2zc2rbgg.css';
import '../../css/s/sfg5djjdz.css';

const viewBox = {"width":418.24,"height":449.27};
const content = `<path class="lcbq29yjm"/><g class="fv8cozbbr"><path class="s3a7m4bzs"/><path class="q2zc2rbgg"/><path class="sfg5djjdz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:risingwave"} {...others} />);
}

export default Component;
