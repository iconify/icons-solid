import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h2zzana6l.css';
import '../../css/f/fu9y3ebsx.css';
import '../../css/s/s6t_yobxf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="h2zzana6l"/><path class="fu9y3ebsx"/><path class="s6t_yobxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:watch-square-time"} {...others} />);
}

export default Component;
