import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/evhjvkc2c.css';
import '../../css/h/he_5as6rh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="evhjvkc2c"/><path class="he_5as6rh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:copilot"} {...others} />);
}

export default Component;
