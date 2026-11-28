import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vq2xllb5l.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q18biqbaz.css';
import '../../css/b/bxn3_jb7p.css';
import '../../css/p/p36kaob0j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary vq2xllb5l"/><g class="dt0cm9dhy primary"><path class="q18biqbaz"/><path class="bxn3_jb7p"/><path class="p36kaob0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:discord-duo"} {...others} />);
}

export default Component;
