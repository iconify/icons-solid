import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hvm5pohcm.css';
import '../../css/o/on8f5nbpz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hvm5pohcm"/><path class="on8f5nbpz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:gas-f"} {...others} />);
}

export default Component;
