import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/za4dq5dii.css';
import '../../css/l/lz7qisafo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="za4dq5dii"/><path class="lz7qisafo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:long-arrow-left-up"} {...others} />);
}

export default Component;
