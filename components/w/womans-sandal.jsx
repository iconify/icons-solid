import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2ta-sa5e.css';
import '../../css/n/np1q-ibul.css';
import '../../css/t/tgdehrb9t.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/i/ihw-4dn-s.css';
import '../../css/y/ylhmogbjb.css';
import '../../css/n/n08_2k8eh.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="r2ta-sa5e"/><path class="np1q-ibul"/><path class="tgdehrb9t"/><g class="jn8qy4bru"><path class="ihw-4dn-s"/><path class="ylhmogbjb"/><path class="n08_2k8eh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:womans-sandal"} {...others} />);
}

export default Component;
