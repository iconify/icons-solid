import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q0exz4q8e.css';
import '../../css/z/zcefhwbwk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><ellipse class="q0exz4q8e"/><ellipse class="zcefhwbwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:torus"} {...others} />);
}

export default Component;
