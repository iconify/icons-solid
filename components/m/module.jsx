import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z5dcfx6bk.css';
import '../../css/h/h9znldyeo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="z5dcfx6bk"/><path class="h9znldyeo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:module"} {...others} />);
}

export default Component;
