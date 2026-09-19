import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y1zn9zwza.css';
import '../../css/o/oyjg--ejj.css';
import '../../css/t/t5xh3is5k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y1zn9zwza"/><circle class="oyjg--ejj"/><path class="t5xh3is5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:monitor-dot"} {...others} />);
}

export default Component;
