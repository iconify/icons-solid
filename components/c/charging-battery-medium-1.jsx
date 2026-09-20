import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i0gnqkbal.css';
import '../../css/l/lznxy4hta.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i0gnqkbal"/><path class="lznxy4hta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:charging-battery-medium-1"} {...others} />);
}

export default Component;
