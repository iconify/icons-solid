import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ir-l3d4bi.css';
import '../../css/o/od-orcbyj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ir-l3d4bi"/><path class="od-orcbyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:deepmind"} {...others} />);
}

export default Component;
