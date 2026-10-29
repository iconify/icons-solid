import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a7buc6bao.css';
import '../../css/t/tygsh6hqg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="a7buc6bao"/><path class="tygsh6hqg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:plane-duo"} {...others} />);
}

export default Component;
