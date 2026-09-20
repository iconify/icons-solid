import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fpll9nmog.css';
import '../../css/p/pqo6v4bsc.css';
import '../../css/r/r_580nbkq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fpll9nmog"/><path class="pqo6v4bsc"/><path class="r_580nbkq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:weather-sun"} {...others} />);
}

export default Component;
