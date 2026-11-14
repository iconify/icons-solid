import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kkeo9r8ft.css';
import '../../css/m/mfqp13bka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kkeo9r8ft"/><path class="mfqp13bka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:contact"} {...others} />);
}

export default Component;
