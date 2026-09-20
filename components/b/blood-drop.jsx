import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zols1xbmc.css';
import '../../css/o/oweeyyila.css';
import '../../css/f/fi11yacax.css';
import '../../css/q/q5u_d7bfd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zols1xbmc"/><path class="oweeyyila"/><path class="fi11yacax"/><path class="q5u_d7bfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:blood-drop"} {...others} />);
}

export default Component;
