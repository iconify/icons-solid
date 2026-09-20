import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q7t5tgbbo.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/e/ejs0zacyb.css';
import '../../css/s/s7-oj7i7v.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="q7t5tgbbo"/><g class="jn8qy4bru"><path class="ejs0zacyb"/><path class="s7-oj7i7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:palm-up-hand-dark-skin-tone"} {...others} />);
}

export default Component;
