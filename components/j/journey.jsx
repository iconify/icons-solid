import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/z/zu4_6r0wo.css';
import '../../css/v/vh366uf2d.css';
import '../../css/t/tt_dehbtw.css';
import '../../css/t/tejeg95en.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="zu4_6r0wo"/><path class="vh366uf2d"/><path class="tt_dehbtw"/><path class="tejeg95en"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:journey"} {...others} />);
}

export default Component;
