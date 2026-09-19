import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mw8335xum.css';
import '../../css/t/t96avbcnq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mw8335xum"/><path class="t96avbcnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hotdog"} {...others} />);
}

export default Component;
