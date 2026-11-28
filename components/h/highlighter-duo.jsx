import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p27m1gsns.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/ox74gzd0h.css';
import '../../css/v/v96i2q43c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p27m1gsns secondary"/><g class="dt0cm9dhy primary"><path class="ox74gzd0h"/><path class="v96i2q43c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:highlighter-duo"} {...others} />);
}

export default Component;
