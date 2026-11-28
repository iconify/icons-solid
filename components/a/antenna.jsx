import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/ta-b9kowj.css';
import '../../css/y/y6m4-subp.css';
import '../../css/l/ltxc5lndl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ta-b9kowj"/><path class="y6m4-subp"/><path class="ltxc5lndl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:antenna"} {...others} />);
}

export default Component;
