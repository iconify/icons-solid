import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ujdmpbb7x.css';
import '../../css/m/mx7m2kb4p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ujdmpbb7x"/><path class="mx7m2kb4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mi:image"} {...others} />);
}

export default Component;
