import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/shiuxup4c.css';
import '../../css/q/q0exz4q8e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><ellipse class="shiuxup4c"/><ellipse class="q0exz4q8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:torus"} {...others} />);
}

export default Component;
