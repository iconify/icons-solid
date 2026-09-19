import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/ruvu4yxzk.css';
import '../../css/i/i1cd8bsmc.css';
import '../../css/i/iexuhfb5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ruvu4yxzk"/><path class="i1cd8bsmc"/><path class="iexuhfb5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:citrus"} {...others} />);
}

export default Component;
