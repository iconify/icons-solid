import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tohp91dov.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bu_5_sd4o.css';
import '../../css/j/jjy36xb2g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary tohp91dov"/><g class="dt0cm9dhy primary"><path class="bu_5_sd4o"/><path class="jjy36xb2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:clipboard-duo"} {...others} />);
}

export default Component;
