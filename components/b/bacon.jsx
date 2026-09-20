import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d2fun1bgb.css';
import '../../css/r/rk4t957vw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d2fun1bgb"/><path class="rk4t957vw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:bacon"} {...others} />);
}

export default Component;
