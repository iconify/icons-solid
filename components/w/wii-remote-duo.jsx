import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ia4qhfxyu.css';
import '../../css/l/l7mjvfb2c.css';
import '../../css/k/keoezfscj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ia4qhfxyu"/><path clip-rule="evenodd" class="l7mjvfb2c"/><path class="keoezfscj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:wii-remote-duo"} {...others} />);
}

export default Component;
