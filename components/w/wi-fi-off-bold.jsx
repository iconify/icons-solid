import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdw0b213e.css';
import '../../css/n/nlt59cbzt.css';
import '../../css/l/l101akbav.css';
import '../../css/b/bs-gs5b8g.css';
import '../../css/h/hrsx7x7qc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rdw0b213e"/><path class="nlt59cbzt"/><path class="l101akbav"/><path class="bs-gs5b8g"/><path class="hrsx7x7qc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-off-bold"} {...others} />);
}

export default Component;
