import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/giey3ccde.css';
import '../../css/j/jsuc-q3of.css';
import '../../css/b/byf74_xsd.css';
import '../../css/r/r3noqacui.css';
import '../../css/i/ii-voubgb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="giey3ccde"/><path class="jsuc-q3of"/><path class="byf74_xsd"/><path class="r3noqacui"/><path class="ii-voubgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:git-fork"} {...others} />);
}

export default Component;
