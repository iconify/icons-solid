import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/i/ii0wlebwq.css';
import '../../css/t/tq02k9b6e.css';
import '../../css/m/mujmwlp-j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="ii0wlebwq"/><ellipse class="tq02k9b6e"/><path class="mujmwlp-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:future-build-two"} {...others} />);
}

export default Component;
