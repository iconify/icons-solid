import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/z/zsgcdmb6z.css';
import '../../css/z/z8pfvfbgm.css';
import '../../css/a/a8l0d-blg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="zsgcdmb6z"/><path class="z8pfvfbgm"/><path class="a8l0d-blg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:skull"} {...others} />);
}

export default Component;
