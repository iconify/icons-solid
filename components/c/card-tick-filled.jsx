import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/had78vbeo.css';
import '../../css/s/s6akcqbre.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="had78vbeo"/><path class="s6akcqbre"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:card-tick-filled"} {...others} />);
}

export default Component;
