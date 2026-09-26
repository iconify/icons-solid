import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m8cf4vb5m.css';
import '../../css/q/qwnb2m7yv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="m8cf4vb5m"/><path class="qwnb2m7yv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-right-from-line-line-duotone"} {...others} />);
}

export default Component;
