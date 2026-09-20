import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2r_kg_ej.css';
import '../../css/t/tkbvg7s4e.css';
import '../../css/d/d6f1x5bln.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a2r_kg_ej"/><path class="tkbvg7s4e"/><path class="d6f1x5bln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:xrt"} {...others} />);
}

export default Component;
