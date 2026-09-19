import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/go4h90b_a.css';
import '../../css/h/haxyilbls.css';
import '../../css/y/y17qu75gh.css';
import '../../css/f/f5047ibgu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="go4h90b_a"/><path class="haxyilbls"/><path class="y17qu75gh"/><path class="f5047ibgu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:cricket-game"} {...others} />);
}

export default Component;
