import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/btnve5bgb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mlhogcckt.css';
import '../../css/c/cj058b15h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="btnve5bgb secondary"/><g class="dt0cm9dhy primary"><path class="mlhogcckt"/><path class="cj058b15h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:at-sign-duo"} {...others} />);
}

export default Component;
