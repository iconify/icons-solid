import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p07tmccvv.css';
import '../../css/f/fxuspib9g.css';
import '../../css/s/svp7he8me.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="p07tmccvv"><path class="fxuspib9g"/><path class="svp7he8me"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:git-repository-commits"} {...others} />);
}

export default Component;
