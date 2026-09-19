import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e054khbwg.css';
import '../../css/a/ajn89rgng.css';
import '../../css/o/oexh4b5fx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e054khbwg"/><path class="ajn89rgng"/><path class="oexh4b5fx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:solar-panel-02"} {...others} />);
}

export default Component;
