import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cy29pc7fb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/szl-vpbku.css';
import '../../css/n/n1-nh8qnp.css';
import '../../css/g/g6flz5byn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cy29pc7fb secondary"/><g class="dt0cm9dhy primary"><path class="szl-vpbku"/><path class="n1-nh8qnp"/><path class="g6flz5byn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:image-duo"} {...others} />);
}

export default Component;
