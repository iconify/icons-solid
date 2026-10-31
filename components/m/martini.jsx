import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/u14h2nnim.css';
import '../../css/j/jv0fhacxo.css';
import '../../css/b/bg79nabpd.css';
import '../../css/m/mq7rj2aqp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="u14h2nnim wm-shadow"/><path class="jv0fhacxo wm-shadow"/><path class="bg79nabpd"/><path class="mq7rj2aqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:martini"} {...others} />);
}

export default Component;
