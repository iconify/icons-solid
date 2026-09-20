import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fsepixbkn.css';
import '../../css/c/cgtb-8b0p.css';
import '../../css/d/djamc0beq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fsepixbkn"/><path class="cgtb-8b0p"/><path class="djamc0beq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:cusdc"} {...others} />);
}

export default Component;
