import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sust44jvl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jg3y9yc8q.css';
import '../../css/k/kmvaoyg2v.css';
import '../../css/s/s7jx7pbmu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary sust44jvl"/><g class="dt0cm9dhy primary"><path class="jg3y9yc8q"/><path class="kmvaoyg2v"/><path class="s7jx7pbmu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:shopping-bag-duo"} {...others} />);
}

export default Component;
